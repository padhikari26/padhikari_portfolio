# Purnima Adhikari Portfolio

This repository contains the source code for **Purnima Adhikari’s** personal portfolio website.  The site is built with plain HTML, CSS and a small amount of vanilla JavaScript, making it easy to deploy on platforms like GitHub Pages.  It’s designed to be clean, responsive and easy to navigate so admission officers can quickly find the information they need.  According to design best practices, a portfolio site should highlight your best work, avoid clutter and make important pages like your contact page easy to find【218564993931711†L60-L82】【513618783055620†L68-L132】.

## Quick start

To preview the website locally:

1. Clone or download this repository to your computer.
2. Open `index.html` in your favourite web browser.  There is no build step – all pages are static HTML.

## Customising your content

The site uses a consistent header and footer across all pages.  Each page lives at the root of the project and can be edited directly with a text editor.  Here are some common customisation tasks:

### Updating text

All of the headings, paragraphs and button labels in the HTML files can be edited directly.  For example, to change your personal statement, open `about.html` and replace the text inside the `<p>` tags in the *Personal Statement* section.

### Replacing images

Images used on the site live in the `cached_assets_used` and `assets` folders.  To change the hero image on the home page, replace `cached_assets_used/ai_concept.jpg` with a picture of your choice and update the `<img>` tag’s `src` attribute in `index.html`.  For headshots and certificate images, place your files in the appropriate sub‑folders (e.g. `assets/certificates/`) and reference them in the HTML.

### Embedding videos

Project pages include `<video>` tags where you can embed demo recordings.  Upload your MP4 or WebM files to the `assets/videos/` directory (create this folder if it does not exist) and set the `src` attribute of the `<video>` element accordingly.  GitHub Pages serves static media files by default.

### Adding certificates and awards

Certificates are stored in `assets/certificates/`.  To add a new certificate, save the image or PDF into this folder and duplicate one of the achievement cards in `achievements.html`.  Update the `<img>` tag and the download link to point to your new file.

### Updating your résumé

The résumé page (`resume.html`) includes a download button for a PDF.  Place your résumé file in `assets/resume/` and update the link’s `href` attribute accordingly.  The page also outlines your education, experience and skills in a simple, readable format.

## Deploying to GitHub Pages

GitHub Pages can host static websites directly from a repository.  To deploy your portfolio:

1. Create a new repository on GitHub and push the contents of this project to the repository.  Make sure the default branch is **`main`**.
2. In your repository settings, scroll down to the **Pages** section.  Choose the **main** branch as the source and `/ (root)` for the folder.
3. Click **Save**.  GitHub will build your site and publish it at `https://<your-username>.github.io/<repository-name>/`.  It may take a few minutes for the site to become available.
4. Share the published URL on your college applications.

## Extending the site

You can continue to expand the site by adding more sections or pages.  To add a new project or activity, duplicate one of the existing `<div class="card">` elements and modify the title, description and links.  Because the layout uses CSS Grid, cards will automatically wrap and stay responsive on smaller screens.  If you need a contact form that actually sends messages, consider using a form backend service like [Formspree](https://formspree.io) or [Netlify Forms] – update the `action` attribute in `contact.html` with your chosen service’s endpoint.

## License

This project is open source under the terms of the MIT license (see `LICENSE`).  You are free to modify and reuse the code for your own portfolio.
