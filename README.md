# Nambuli Ndaitavela Ndapwoshisho - Computer Programming I Portfolio Showcase

## Overview
This repository contains Nambuli Ndaitavela Ndapwoshisho's static portfolio showcase for Computer Programming I.

## Live Site
Live site after deployment: https://Ndaitavela.github.io/NambuliNdaitavelaPortfolio/

Repository: https://github.com/Ndaitavela/NambuliNdaitavelaPortfolio

## Project
Project: SiteSpy

## Student Contribution
The contribution evidence focuses on SiteSpy dashboard UI work, mobile interface review, responsive layout checks, card and section structure, and user-facing project documentation.

Identity note: the same student is referenced in older project records as Nambuli NN and Ndaitavela. This final portfolio uses one deployment identity: Nambuli Ndaitavela Ndapwoshisho, GitHub `Ndaitavela`, email `ndaitavelandapwa059@gmail.com`.

## Tech Stack
- Static HTML, CSS, and JavaScript
- GitHub Pages
- GitHub Actions
- Preserved Flet/Python source
- SiteSpy project context: React Native, Expo, Firebase, JavaScript

## Static Deployment Architecture
GitHub Pages serves the static site in `site/`. The Flet/Python source is preserved where applicable, but it is not used as the live GitHub Pages runtime.

## Local Preview
```bash
python -m http.server 8000 --directory site
```

Open:

```text
http://localhost:8000
```

## Evidence Assets
- `src/screens/DashboardScreen.js`
- `src/components/AppCard.js`
- `src/components/SectionHeader.js`
- `src/theme/`

The prepared evidence assets live in `site/assets/screenshots/`.

## Contribution Documents
- `docs/contribution-report.md`
- `docs/contribution-report.pdf`
- `docs/presentation-guide.md`
- `docs/presentation-guide.pdf`

## Certificates
MATLAB and Simulink certificate files live in `site/assets/certificates/` and are listed by `site/certificates.json`.

- Calculations with Vectors and Matrices
- Explore Data with MATLAB Plots
- Machine Learning Onramp
- Make and Manipulate Matrices
- MATLAB Onramp
- Simulink Onramp
- Solve Higher-Order ODEs

## Contribution Video Section
The static site includes an Individual Contribution Video section for the 1 minute 30 second showcase recording.

## GitHub Pages Deployment
GitHub Actions uploads the `site/` folder. Pages source must be GitHub Actions. Do not use branch/root deployment for Flet/Python.

## Maintenance Notes
- Keep private role documents out of Git.
- Keep tokens in local terminal environment variables only.
- Do not deploy the Flet/Python runtime to GitHub Pages.
