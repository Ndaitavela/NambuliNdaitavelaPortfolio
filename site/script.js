const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const loader = document.querySelector('#page-loader');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (loader) {
  window.addEventListener('load', () => {
    window.setTimeout(() => loader.classList.add('is-hidden'), 350);
  });
}

async function loadJson(path) {
  const response = await fetch(path);
  if (!response.ok) return [];
  return response.json();
}

function iconUse(id) {
  const sprite = document.querySelector('.icon-sprite');
  if (sprite) {
    return `<svg aria-hidden="true"><use href="#${id}"></use></svg>`;
  }
  return '';
}

const evidenceIcons = {
  'Commit History Asset': 'icon-github',
  'Development Branch Asset': 'icon-rocket',
  'Pull Request Evidence Asset': 'icon-check-circle',
  'Interface Evidence Asset': 'icon-layout-dashboard',
  'Code Contribution Asset': 'icon-code',
  'Documentation Evidence Asset': 'icon-file-text'
};

function renderEvidence(items) {
  const grid = document.querySelector('#evidence-grid');
  if (!grid) return;
  grid.innerHTML = items.map((item) => {
    const icon = evidenceIcons[item.title] || 'icon-check-circle';
    const useIcon = iconUse(icon);
    return `
      <article class="evidence-card">
        <img src="${item.image}" alt="${item.title}">
        <div>
          <h3>${useIcon}${item.title}</h3>
          <p>${item.caption}</p>
        </div>
      </article>
    `;
  }).join('');
}

function loadProfileImage() {
  const img = document.getElementById('profile-img');
  if (!img) return;
  const paths = [
    'assets/profile/profile.jpg',
    'assets/profile/profile.jpeg',
    'assets/profile/profile.png',
    'assets/placeholders/profile-placeholder.svg'
  ];
  let idx = 0;
  
  function tryNext() {
    if (idx >= paths.length) return;
    const testImg = new Image();
    testImg.onload = () => {
      img.src = paths[idx];
    };
    testImg.onerror = () => {
      idx++;
      tryNext();
    };
    testImg.src = paths[idx];
  }
  tryNext();
}

async function renderVideo() {
  const container = document.querySelector('#video');
  if (!container) return;
  
  const videoUrl = 'assets/videos/contribution-video.mp4';
  const placeholderUrl = 'assets/placeholders/video-placeholder.svg';
  
  let exists = false;
  try {
    const response = await fetch(videoUrl, { method: 'HEAD' });
    exists = response.ok;
  } catch (e) {
    exists = false;
  }
  
  if (exists) {
    container.innerHTML = `
      <div class="video-player-container" style="width:100%;">
        <h3>Individual Contribution Video</h3>
        <video controls playsinline style="width: 100%; border-radius: 8px; background: #000; outline: none; margin-top: 10px;">
          <source src="${videoUrl}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="video-placeholder-container" style="width:100%; text-align:center;">
        <img src="${placeholderUrl}" alt="Contributor video coming soon" style="width:100%; max-width:480px; border-radius:8px; display:block; margin:0 auto 12px; box-shadow:var(--shadow);">
        <h3>Individual Contribution Video</h3>
        <p style="color:var(--muted); font-size:14px; margin-top:8px;">Contributor video coming soon</p>
      </div>
    `;
  }
}

function renderCertificates(items) {
  const grid = document.querySelector('#certificate-grid');
  if (!grid) return;
  const section = document.querySelector('#certificates');
  const navLink = document.querySelector('[href="#certificates"]');
  
  if (section) section.hidden = false;
  if (navLink) navLink.hidden = false;
  
  if (!items || !items.length) {
    const useIcon = iconUse('icon-file-text');
    grid.innerHTML = `
      <article class="certificate-card placeholder-card" style="text-align: center; padding: 24px; border-style: dashed;">
        <img src="assets/placeholders/certificate-placeholder.svg" alt="Certificates coming soon" style="max-width: 100px; margin: 0 auto 12px; display: block;">
        ${useIcon}
        <h3>Certificates coming soon</h3>
        <p style="color: var(--muted); font-size: 14px;">Verification in progress</p>
      </article>
    `;
    return;
  }
  
  const useIcon = iconUse('icon-file-text');
  grid.innerHTML = items.map((item) => `
    <article class="certificate-card">
      ${useIcon}
      <h3>${item.title}</h3>
      <div class="cert-meta" style="font-size: 11px; color: var(--muted); display: flex; gap: 8px; margin-bottom: 10px; margin-top: 5px;">
        <span class="cert-badge" style="background: var(--accent-soft); color: var(--navy); padding: 2px 8px; border-radius: 4px; font-weight: bold;">${item.category}</span>
        <span class="cert-type" style="border: 1px solid var(--line); padding: 2px 8px; border-radius: 4px;">${item.type}</span>
      </div>
      <p style="margin-bottom:12px; font-size: 14px; color: var(--muted);">Certificate evidence file.</p>
      <a href="${item.path}" target="_blank" rel="noopener" style="align-self: flex-start; color: var(--navy); font-weight: 700; text-decoration: none; border-bottom: 1px solid currentColor;">Open Certificate</a>
    </article>
  `).join('');
}

loadJson('evidence.json').then(renderEvidence).catch(() => renderEvidence([]));
loadJson('assets/certificates-manifest.json').then(renderCertificates).catch(() => renderCertificates([]));
loadProfileImage();
renderVideo();
