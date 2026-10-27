# Batuhan Saç — Portfolio

Personal portfolio and biography website, with a Turkish interface, selected .NET projects, and professional contact links.

**Website:** https://batuhansac.dev/

## Structure

- `index.html`: page content and metadata
- `style.css`: responsive layout and visual styles
- `app.js`: navigation, project dialogs, and reading progress
- `assets/`: profile photo, favicon, and project concept illustrations
- `CONTENT-SOURCES.md`: sources for profile and project facts

The website is plain HTML, CSS, and JavaScript. No build step or package installation is required.

## Contact

The contact section displays `batuhansac53@gmail.com`, a message link, and a copy-address button. The message link opens the visitor's email application with a prepared subject. The site does not submit or store messages. LinkedIn and GitHub remain available as alternative contact channels.

## Local preview

Serve this directory with a static HTTP server. For example, with Python installed:

```sh
python -m http.server 8000
```

Then open http://localhost:8000/.

## Publishing

GitHub Pages publishes the root directory of the `main` branch. Updates to that branch are published automatically. `.nojekyll` keeps the static files unchanged during publication.

The project images are labeled concept illustrations, rather than screenshots of the applications.
