# Los Mismos No 🇵🇪

A web application showcasing Peruvian congressional candidates who are attempting to circumvent the no-reelection referendum by running for different positions (Senate instead of Congress, or vice versa) in the 2026 elections.

## 🎯 Purpose

This project aims to increase transparency and public awareness about congressional candidates' political movements, specifically those changing roles to maintain their political positions despite constitutional restrictions on consecutive reelection.

## ✨ Features

- **Card-Based Layout**: Clean, modern interface displaying candidates as interactive cards
- **Dynamic Filtering**: Filter candidates by political party and position (Senator/Deputy)
- **Photo Support**: Display candidate photos (optional)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **GitHub Integration**: Easy contribution process via GitHub issues
- **Real-time Updates**: Simple JSON-based data that can be updated frequently

## 🗂️ Project Structure

```
los-mismo-no/
├── index.html          # Main HTML file
├── index.css           # Styling
├── index.js            # Application logic
├── db/
│   └── db.json         # Candidate database
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
      "nombre": "Candidate Name",
      "partido_politico": "Political Party",
      "informacion_adicional": "Position and additional info",
      "foto": null
    }
  ]
}
```

### Candidate Fields

| Field | Type | Description |
|-------|------|-------------|
| `nombre` | string | Full name of the candidate |
| `partido_politico` | string | Political party affiliation |
| `informacion_adicional` | string | Current/target position and notes |
| `foto` | string/null | URL to candidate photo (optional) |

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
  "informacion_adicional": "Senador, Expresidente del Congreso",
  "foto": "https://example.com/juan-perez.jpg"
}
```

### Option 2: GitHub Issues

Click the **"Crear issue para agregar candidato"** button on the website. This opens a pre-filled GitHub issue template where you can provide:
- Candidate name
- Political party
- Target position
- Photo URL
- Additional information

## 🎨 Customization

### Styling

Edit `index.css` to customize:
- Colors (CSS variables in `:root`)
- Card layout and spacing
- Typography
- Responsive breakpoints

### Adding Features

Edit `index.js` to:
- Add new filter options
- Implement sorting functionality
- Add more candidate details
- Integrate with external APIs

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

1. **Add candidates** via the GitHub issue button on the website
2. **Contribute photos** by creating a PR with photo URLs
3. **Report issues** if you find bugs or have suggestions
4. **Improve design/features** by opening a discussion or PR

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
