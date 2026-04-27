# Raul Ardelean - Personal Website

This is a lightweight one-page personal portfolio website built with plain HTML, CSS, and JavaScript.

The website presents my academic journey, selected projects, technical skills, resume, and contact links in a clean dark-themed interface.

## Available Scripts

In the project directory, you can run:

### `node dev-server.js`

Runs the website locally using the included static development server.

Open [http://127.0.0.1:8080](http://127.0.0.1:8080) to view it in your browser.

The page will not automatically reload when you make changes. Refresh the browser manually after editing the files.

### `node dev-server.js 3000`

Runs the website on a custom port.

Open [http://127.0.0.1:3000](http://127.0.0.1:3000) to view it in your browser.

## Project Structure

```text
.
+-- assets/
|   +-- profile-photo.webp
+-- dev-server.js
+-- index.html
+-- script.js
+-- styles.css
+-- Raul-Ardelean-CV.pdf
+-- README.md
```

## Main Files

### `index.html`

Contains the main page structure.

The page is divided into the following sections:

- Hero
- Journey
- Projects
- Skills
- Contact
- Footer

### `styles.css`

Contains all layout, typography, responsive behavior, colors, buttons, cards, and section styling.

### `script.js`

Contains the website content and renders dynamic sections such as navigation, hero content, skills, projects, journey entries, contact links, and footer text.

Most content changes should be made in this file.

### `dev-server.js`

Provides a small local static server for previewing the website in the browser.

## Editing Content

Most visible content is stored in `script.js`.

You can update:

- `meta` - page title and description
- `nav` - navigation links
- `hero` - name, intro, resume link, and social links
- `skills` - technical skills
- `journey` - education, achievements, and milestones
- `projects` - featured projects and GitHub links
- `contact` - email and social/contact links

## Deployment

This is the first stage of the website and is currently intended to run locally during development.

The next stage is to publish the website online and connect it to a personal domain.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Node.js local development server

No React, frontend framework, bundler, or package installation is required.
