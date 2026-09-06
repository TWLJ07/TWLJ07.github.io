# Tucker Johnson | Portfolio

**Mechatronics engineering. Robotics. Marine technology.**

A personal engineering portfolio built around curiosity, hands-on design, and autonomous systems. Version 2.0 brings projects, experience, and contact information into one continuous page, connected by an animated drone flight path.

[Visit the website](https://twlj07.github.io/) · [View portfolio PDF](assets/projects/Portfolio/Tucker_Johnson_Project_Portfolio.pdf) · [View resume PDF](assets/projects/Resume/Tucker_Johnson_Resume.pdf)

## What's new in 2.0

- **One continuous experience:** an introduction at the top, alternating project cards along a central flight path, and contact details at the bottom.
- **Four featured projects:** concise introductions, expandable summaries, technology tags, and photo galleries.
- **A drone in motion:** an SVG drone illustration follows the project timeline as you scroll.
- **A refreshed visual style:** a dark background, cyan and violet accents, Space Grotesk headings, and Manrope body text.
- **The details, to go:** direct downloads of the resume and project portfolio PDFs.
- **Responsive and accessible foundations:** mobile layouts, keyboard focus indicators, a skip link, a native image dialog, and reduced-motion support.

See [the changelog](CHANGELOG.md) for the release overview.

## Featured projects

| Project | Focus |
| --- | --- |
| Drone Video to 3D Simulation Software | Photogrammetry, computer vision, interactive 3D analysis |
| Marine Monitoring Buoy | Conceptual mechanical design, acoustic sensing, subsystem integration |
| SD Card & Battery Pack Test Fixtures | Hardware integration, fabrication, repeatable electrical testing |
| NavBot | Autonomous navigation, embedded programming, closed-loop control |

Each project includes a main image and additional photos inside its expandable description. Selecting an image opens the full-size original in a dialog.

## Built with

**HTML, CSS, and vanilla JavaScript.** No framework, package installation, or build step is required.

The drone is an original inline SVG illustration animated with CSS and JavaScript. Google Fonts supplies **Space Grotesk** and **Manrope**, with system-font fallbacks and swap rendering. Project photos and PDFs are served from this repository.

## Preview locally

Open `index.html` in your browser, or serve the repository with your preferred static server. With Python installed:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`. On Windows, use `py -m http.server 8000` if Python is available through the launcher.

## Repository guide

```text
.
|-- index.html          # Single-page portfolio and project galleries
|-- styles.css          # Layout, typography, responsive styles, animation
|-- script.js           # Drone scroll position, image viewer, navigation
|-- projects.html       # Legacy redirect to the project section
|-- work.html           # Legacy redirect to the experience section
|-- portfolio.html      # Legacy redirect to the portfolio PDF
|-- CHANGELOG.md        # Release notes
`-- assets/projects/
    |-- Drone Software/
    |-- Marine Buoy/
    |-- Test Fixtures/
    |-- Navbot/
    |-- Resume/
    `-- Portfolio/
```

## Updating the content

**Text and projects:** edit `index.html`. Keep the card introduction short and put the technology tags, project summary, and additional images inside its `<details>` element.

**Photos:** place files in the matching project folder. Update both `src` and `data-image` on the relevant image button, along with its alt text and caption. Filenames are case-sensitive on GitHub Pages; spaces in existing image URLs are encoded as `%20`.

| Project folder | Main image |
| --- | --- |
| `Drone Software` | `Dense_Points.png` |
| `Marine Buoy` | `BUOY_1.png` |
| `Test Fixtures` | `SD_TOP.jpg` |
| `Navbot` | `Robot1.png` |

**PDFs:** replace the files below to update downloads without changing the links:

- `assets/projects/Resume/Tucker_Johnson_Resume.pdf`
- `assets/projects/Portfolio/Tucker_Johnson_Project_Portfolio.pdf`

Keep the legacy redirect pages so previously shared addresses continue to work.

## Before publishing

- Run `node --check script.js` and `git diff --check`.
- Preview at desktop and mobile widths.
- Open each project dropdown and image viewer; check keyboard focus and Escape to close.
- Check the resume and portfolio downloads, contact links, and legacy redirects.
- Confirm new images and PDFs are included in the commit.

The site is intended for GitHub Pages and requires no generated build output. Publish using the repository's configured Pages source.

## Contact

[LinkedIn](https://www.linkedin.com/in/t28johns/) · [Email Tucker](mailto:t28johns@uwaterloo.ca)
