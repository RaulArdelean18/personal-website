# Raul Ardelean - Personal Website

Personal portfolio website for Raul Ardelean.

Live site: [https://raulardelean.com](https://raulardelean.com)

The site is a lightweight one-page portfolio built with plain HTML, CSS, and JavaScript. It presents my academic journey, projects, skills, resume, and contact links.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Node.js static development server

No framework, bundler, or package installation is required.

## Run Locally

From the repository root:

```bash
node dev-server.js
```

Open:

```text
http://127.0.0.1:8080
```

To use a custom port:

```bash
node dev-server.js 3000
```

Then open:

```text
http://127.0.0.1:3000
```

The local server does not auto-reload. Refresh the browser after editing files.

## Project Structure

```text
.
+-- assets/
|   +-- profile-photo.webp
+-- CNAME
+-- dev-server.js
+-- index.html
+-- Raul-Ardelean-CV.pdf
+-- script.js
+-- styles.css
+-- README.md
```

## Main Files

- `index.html` contains the page structure.
- `styles.css` contains layout, responsive behavior, typography, colors, and component styling.
- `script.js` stores most visible content and renders navigation, hero content, journey entries, projects, skills, contact links, and footer text.
- `dev-server.js` serves the site locally for previewing changes.
- `CNAME` connects the GitHub Pages deployment to `raulardelean.com`.

## Editing Content

Most content changes should be made in `script.js`.

Common updates:

- `meta` - page title and description
- `nav` - navigation links
- `hero` - intro, resume link, targets, and social links
- `journey` - education, achievements, and milestones
- `projects` - featured projects and GitHub links
- `skills` - technical skills
- `contact` - email and social/contact links

Update `Raul-Ardelean-CV.pdf` when replacing the resume file.

## Deployment

The site is deployed with GitHub Pages and connected to the custom domain:

```text
raulardelean.com
```

Changes pushed to the repository's main branch are reflected on the live site after GitHub Pages finishes deploying.
