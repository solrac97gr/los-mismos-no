// State
let allCandidates = [];
let filteredCandidates = [];

// DOM Elements
const candidatesContainer = document.getElementById('candidatesContainer');
const filterNameInput = document.getElementById('filterName');
const filterRoleSelect = document.getElementById('filterRole');
const updateDateElement = document.getElementById('updateDate');

// Initialize the application
async function init() {
    try {
        // Load data from database
        const response = await fetch('db/db.json');
        const data = await response.json();

        allCandidates = data.congresistas || [];
        filteredCandidates = [...allCandidates];

        // Update the date
        updateDateElement.textContent = data.fecha_actualizacion || '--';

        // Render candidates
        renderCandidates();

        // Setup event listeners
        setupEventListeners();
    } catch (error) {
        console.error('Error loading data:', error);
        candidatesContainer.innerHTML = '<div class="empty-state"><h2>Error cargando datos</h2></div>';
    }
}

// Setup event listeners for filters
function setupEventListeners() {
    filterNameInput.addEventListener('input', applyFilters);
    filterRoleSelect.addEventListener('change', applyFilters);
}

// Normalize text: remove accents and convert to lowercase
function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''); // Remove diacritical marks
}

// Apply filters and re-render
function applyFilters() {
    const selectedRole = filterRoleSelect.value;
    const searchName = filterNameInput.value;
    const normalizedSearch = normalizeText(searchName);

    filteredCandidates = allCandidates.filter(candidate => {
        // Filter by name
        if (searchName) {
            const normalizedCandidateName = normalizeText(candidate.nombre);
            if (!normalizedCandidateName.includes(normalizedSearch)) {
                return false;
            }
        }

        // Filter by role
        if (selectedRole) {
            const posicion = candidate.posicion_postulando.toLowerCase();

            if (selectedRole === 'Senador') {
                if (!posicion.includes('senador')) return false;
            } else if (selectedRole === 'Diputado') {
                if (!posicion.includes('diputado')) return false;
            } else if (selectedRole === 'no-determinado') {
                if (posicion !== '') return false; // Show only candidates with empty position
            }
        }

        return true;
    });

    renderCandidates();
}

// Render candidates as cards
function renderCandidates() {
    if (filteredCandidates.length === 0) {
        candidatesContainer.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <h2>No hay candidatos que coincidan con los filtros</h2>
                <p>Intenta cambiar los criterios de b�squeda</p>
            </div>
        `;
        return;
    }

    candidatesContainer.innerHTML = filteredCandidates.map(candidate => createCandidateCard(candidate)).join('');
}

// Create a candidate card HTML
function createCandidateCard(candidate) {
    const photoHtml = candidate.foto
        ? `<img src="${escapeHtml(candidate.foto)}" alt="${escapeHtml(candidate.nombre)}">`
        : '<span>=�</span>';

    const photoClass = candidate.foto ? '' : 'no-image';

    const posicion = candidate.posicion_postulando || 'No determinado';
    const googleNewsUrl = `https://news.google.com/search?q=${encodeURIComponent(candidate.nombre + ' Peru')}&hl=es&gl=PE`;

    return `
        <a href="${googleNewsUrl}" target="_blank" class="candidate-card" title="Buscar noticias sobre ${escapeHtml(candidate.nombre)}">
            <div class="candidate-photo ${photoClass}">
                ${photoHtml}
            </div>
            <div class="candidate-info">
                <h3 class="candidate-name">${escapeHtml(candidate.nombre)}</h3>
                <div class="candidate-details">
                    <div class="detail-item">
                        <span class="detail-value">${escapeHtml(posicion)}</span>
                    </div>
                </div>
            </div>
        </a>
    `;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
