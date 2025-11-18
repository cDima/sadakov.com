# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Dmitry Sadakov (sadakov.com), built as a static HTML site with Bootstrap 3.x framework. The site is hosted on GitHub Pages using the `gh-pages` branch.

## Architecture

- **Static Site**: Single-page HTML application (`index.htm`) with no build process
- **Frontend Framework**: Bootstrap 3.x with custom CSS styling
- **JavaScript**: jQuery-based with custom smooth scrolling and Instagram feed integration
- **Hosting**: GitHub Pages (gh-pages branch)

## Key Files

- `index.htm` - Main HTML file containing all content sections
- `styles/style.css` - Custom CSS styles and Bootstrap overrides
- `scripts/script.js` - Custom JavaScript for smooth scrolling and interactions
- `portfolio/` - Contains PDF resumes and project screenshots
- `imgs/` - Image assets (headshot, backgrounds, etc.)

## Development Workflow

Since this is a static site with no build process:

1. Edit files directly in the repository
2. Test changes by opening `index.htm` in a browser
3. Commit changes to the `gh-pages` branch for deployment
4. No build, lint, or test commands are needed

## Site Structure

The single-page site has these main sections:
- **Intro** - Name and tagline with headshot
- **Portfolio** - Resume download and qualifications
- **Timeline** - Career history visualization
- **Photos** - Instagram feed integration
- **Places** - Geographic/travel content
- **Contact** - Social media links and contact info

## External Dependencies

- Bootstrap 3.x CSS/JS framework
- jQuery 2.0.3 and jQuery UI
- Font Awesome icons
- Custom DIN font family
- Instagram API integration (instafeed.js)
- Google Analytics tracking

## Notes

- The site uses an older Bootstrap version (3.x) with legacy jQuery
- Instagram integration uses deprecated API tokens that may need updating
- Some social media links and services referenced may be outdated
- The site is designed for GitHub Pages deployment on the gh-pages branch