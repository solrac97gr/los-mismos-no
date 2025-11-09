# Los Mismos No 🇵🇪

A web application showcasing Peruvian congressional candidates who are attempting to circumvent the no-reelection referendum by running for different positions (Senate instead of Congress, or vice versa) in the 2026 elections.

## 🎯 Purpose

This project aims to increase transparency and public awareness about congressional candidates' political movements, specifically those changing roles to maintain their political positions despite constitutional restrictions on consecutive reelection.

## ✨ Features

- **Card-Based Layout**: Clean, modern interface displaying candidates as interactive cards with hover effects
- **Smart Filtering**:
  - Filter by position (Senadores, Diputados, or No determinado)
  - Automatically groups masculine/feminine forms (Senador & Senadora = Senadores)
  - Candidates sorted alphabetically by name - no bias
- **Google News Integration**: Click any candidate card to search Spanish-language Peru news
  - Searches with Spanish language (`hl=es`) and Peru locale (`gl=PE`)
  - Opens in new tab for seamless research
- **No Political Party Display**: Focus on candidates and their target positions, not their party affiliation
- **Photo Support**: Display candidate photos (optional) - use relative paths like `images/candidate-name.jpg`
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **GitHub Integration**: Easy contribution process via pre-filled GitHub issues
- **Real-time Updates**: Simple JSON-based data that can be updated frequently

## 🗂️ Project Structure

```
los-mismo-no/
├── index.html          # Main HTML file
├── index.css           # Styling
├── index.js            # Application logic
├── db/
│   └── db.json         # Candidate database
├── images/             # Candidate photos directory
│   └── candidate-name.jpg
├── README.md           # This file
└── CLAUDE.md          # Development guidance
```

## 📊 Data Structure

The database (`db/db.json`) contains:

```json
{
  "titulo": "Congresistas Peruanos Postulando a Senadores y Diputados - Elecciones 2026",
  "fecha_actualizacion": "2025-11-09",
  "congresistas": [
    {
      "nombre": "Alejandro Aguinaga",
      "partido_politico": "Fuerza Popular",
      "posicion_postulando": "Senador",
      "foto": "images/alejandro-aguinaga.jpg"
    }
  ]
}
```

### Candidate Fields

| Field | Type | Description |
|-------|------|-------------|
| `nombre` | string | Full name of the candidate |
| `partido_politico` | string | Political party affiliation (kept for reference but not displayed) |
| `posicion_postulando` | string | Position running for: `"Senador"`, `"Diputado"`, or `""` (empty for unknown) |
| `foto` | string/null | URL to candidate photo (optional) - use relative path like `images/candidate-name.jpg` |

### Position Values

- **`"Senador"`** - Running for Senate (includes both Senador & Senadora)
- **`"Diputado"`** - Running for Deputy position (includes both Diputado & Diputada)
- **`""`** (empty string) - Position not determined yet (displays as "No determinado")

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/solrac97gr/los-mismo-no.git
cd los-mismo-no
```

2. Open `index.html` in your browser:
```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Or simply drag and drop `index.html` into your browser.

## 📝 Adding/Updating Candidates

### Option 1: Direct Database Edit

Edit `db/db.json` directly and add/update candidate entries:

```json
{
  "nombre": "Juan Pérez",
  "partido_politico": "Fuerza Popular",
  "posicion_postulando": "Senador",
  "foto": "images/juan-perez.jpg"
}
```

**Important Notes:**
- `posicion_postulando` must be exactly: `"Senador"`, `"Diputado"`, or `""` (empty string)
- Photos should be stored in the `images/` folder with relative paths like `images/candidate-name.jpg`
- Keep candidate names exactly as written (including special characters)

### Option 2: GitHub Issues

Click the **"Crear issue para agregar candidato"** button on the website. This opens a pre-filled GitHub issue template where you can provide:
- Candidate name
- Political party
- Target position (Senador, Diputado, or leave blank if unknown)
- Photo URL (or attach image to the issue)

## 🎨 Customization

### Styling

Edit `index.css` to customize:
- Colors (CSS variables in `:root`)
- Card layout and spacing
- Typography
- Responsive breakpoints

### Adding Features

Edit `index.js` to:
- Modify filter options (currently filters by position)
- Change the Google News search parameters
- Add additional display fields
- Implement new sorting or grouping logic

## 🌐 Deployment

This is a static website and can be deployed to:

- **GitHub Pages**: Free hosting directly from your repository
- **Netlify**: Drag and drop deployment
- **Vercel**: Zero-config deployment
- **Any static hosting**: AWS S3, Firebase, etc.

### Deploy to GitHub Pages

1. Push to your GitHub repository
2. Go to **Settings** → **Pages**
3. Select `main` branch as source
4. Save

Your site will be live at: `https://solrac97gr.github.io/los-mismo-no`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🤝 Contributing

Contributions are welcome! You can:

1. **Add candidates** via the GitHub issue button on the website (fastest way)
2. **Contribute photos**:
   - Add images to the `images/` folder
   - Update the `foto` field in `db/db.json` with the relative path (e.g., `images/candidate-name.jpg`)
   - Submit a PR
3. **Report issues** if you find bugs or have suggestions
4. **Improve design/features** by opening a discussion or PR
5. **Update candidate positions** when they change (Senador → Diputado, etc.)

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

For questions or suggestions, please:
- Create an [Issue](https://github.com/solrac97gr/los-mismo-no/issues)
- Open a [Discussion](https://github.com/solrac97gr/los-mismo-no/discussions)

## ⚖️ Disclaimer

This project is an informational resource about publicly available political information. All data is based on official parliamentary records and public statements. The project aims to promote transparency and informed civic participation.

---

**Last Updated**: November 9, 2025
