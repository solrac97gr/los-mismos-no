# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**los-mismo-no** is a web application about Peruvian congressional candidates postulating for Senate and Deputy positions in the 2026 elections.

**Architecture:**
- Static HTML/CSS/JavaScript application
- Data source: `db/db.json` - Contains candidate information including name, political party, and role (Senator/Deputy)
- No build tooling or framework dependencies currently in use

## File Structure

- `index.html` - Main entry point (currently empty, needs implementation)
- `index.css` - Styling (currently empty, needs implementation)
- `index.js` - Application logic (currently empty, needs implementation)
- `db/db.json` - Static database with candidate data

## Getting Started

Since this is a vanilla JavaScript project without a build process:

1. Open `index.html` in a browser to view the application
2. Edit the HTML, CSS, and JS files directly
3. Reload the browser to see changes

## Data Format

The database (`db/db.json`) contains:
- `titulo` - Title describing the dataset
- `fecha_actualizacion` - Last update date
- `congresistas` - Array of candidate objects with:
  - `nombre` - Candidate name
  - `partido_politico` - Political party
  - `informacion_adicional` - Additional details (role, investigations, notes)

## Key Features Implemented

1. **Responsive Card-Based Layout** - Candidates displayed as cards with hover effects
2. **Dynamic Filtering** - Filter by political party and role (Senador/Senadora/Diputado/Diputada)
3. **Photo Support** - Each candidate can have a `foto` field with image URL
4. **GitHub Issue Link** - Direct link to create GitHub issues for adding new candidates with pre-filled template
5. **Update Timestamp** - Displays the last update date from the database

## Data Structure

Each candidate object now includes:
- `nombre` - Candidate name
- `partido_politico` - Political party
- `informacion_adicional` - Role and additional notes
- `foto` - (NEW) URL to candidate photo (can be null)

## Development Notes

- The application is a vanilla JavaScript SPA that loads candidates from `db/db.json`
- To add photos: update the `foto` field in `db/db.json` with image URLs
- The GitHub issue template is pre-filled with fields: Name, Political Party, Role, Photo URL, and additional info
- Filters work dynamically - selecting "Todos" shows all candidates
- The layout is fully responsive and mobile-friendly
