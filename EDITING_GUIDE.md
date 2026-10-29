# Updating Rina’s website

This is a local adaptation of PRISM (MIT licensed). No public deployment has been made.

## Content updates

- `content/config.toml`: name, contact links, navigation, description and last-updated date.
- `content/bio.md`: homepage introduction.
- `content/projects.toml`: project listing and homepage selected work.
- `content/sum.md`, `content/t-star.md`, `content/stamp.md`: project case studies.
- `content/publications.bib`: publication records, paper and code links. The homepage shows records marked `selected={true}`.
- `content/experience.md`: employment, teaching, supervision and education.
- `content/cv.md`: web CV summary.
- `public/Rina_Cheng_CV.pdf`: public download. Keep the editable Word master in the parent `output/` folder and regenerate this PDF after CV edits.
- `public/images/`: portrait and project figures.

The template’s additional example pages and disabled Chinese content remain upstream examples. They are not linked or exported by this version; do not enable them without replacing their content.

## Preview and build

With Node 22 or later installed, run `npm install`, then `npm run dev`. Run `npm run build` to produce the static `out/` directory. The static export can be hosted on GitHub Pages.

The homepage is in English. There are no analytics, tracking scripts, like counters, contact-form services or account requirements added by this adaptation. Theme selection is stored locally by PRISM.

## Before publishing

The website and CV use the confirmed professional email rina.jingyi.cheng@gmail.com. Confirm the chosen domain before publishing. The CV download is now a two-page PDF; the editable Word master remains local. Review project figures and wording for public sharing. STAMP is described as under review and is not given an invented author list or publication citation.

Use a repository you own for publication. The cloned `origin` currently points to the upstream PRISM template; do not push personal changes there. The supplied GitHub Pages workflow is manual and has not been run. For an account homepage, use `RinaPiggy.github.io`; a project subpath would additionally require configuring a base path.

## Design

PRISM’s profile sidebar, serif headings, restrained accent and light/dark themes are retained. Selected project rows were added before publications to foreground industry delivery and applied research. Fonts use system fallbacks, avoiding a dependency on the reference author’s font server. The original MIT licence is retained in `LICENSE`.

## Template maintenance

Next.js was updated within version 15, unused svg2ico was removed, bibtex-parse-js was set to 0.0.23 to avoid the newer release's inherited test dependencies, and PostCSS was overridden to 8.5.32. Compatible dependency fixes were applied. The package audit reported zero vulnerabilities after these changes. TOML records are normalized to plain objects for the updated framework.

## Private STAMP material

The unpublished architecture figure is kept outside the website in the parent `private-assets/` folder. Do not copy that folder into `public/` or publish it. STAMP uses `public/images/stamp-demand-supply-patterns.png` in its homepage preview, project listing and case study.

## Blog posts

The Blog tab is at `/blog/`. Articles use `/blog/<slug>/`.

To add a post:
1. Add a Markdown file under `content/blog/` containing the article body. The title is stored separately; do not repeat it as a heading in the body.
2. Add a `[[posts]]` entry in `content/blog/posts.toml` with `slug`, `title`, `description` and `source` (e.g. `blog/my-new-post.md`). `category` and `video_url` are optional. Set `video_url` only for a related video; the full video link belongs in the article body.
3. Add an `[[items]]` entry in `content/blog.toml` with title, summary, tags, and a `Read the article` link to `/blog/<slug>/`.
4. Build the site again. Reading time is calculated automatically; publication dates are omitted unless you later choose to add them.

The first article preserves the supplied wording and full YouTube link; timestamp citations were removed. When a post has a valid YouTube `video_url`, the paragraph linking to that video becomes a responsive inline YouTube player with a fallback link. Playback starts only when the visitor presses Play. The iframe uses YouTube’s privacy-enhanced embed domain.
