// State
let allCandidates = [];
let filteredCandidates = [];

// DOM Elements
const candidatesContainer = document.getElementById('candidatesContainer');
const filterPartySelect = document.getElementById('filterParty');
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

        // Populate party filter
        populatePartyFilter();

        // Render candidates
        renderCandidates();

        // Setup event listeners
        setupEventListeners();
    } catch (error) {
        console.error('Error loading data:', error);
        candidatesContainer.innerHTML = '<div class="empty-state"><h2>Error cargando datos</h2></div>';
    }
}

// Populate the party filter dropdown
function populatePartyFilter() {
    const parties = new Set(allCandidates.map(c => c.partido_politico));
    const sortedParties = Array.from(parties).sort();

    sortedParties.forEach(party => {
        const option = document.createElement('option');
        option.value = party;
        option.textContent = party;
        filterPartySelect.appendChild(option);
    });
}

// Setup event listeners for filters
function setupEventListeners() {
    filterPartySelect.addEventListener('change', applyFilters);
    filterRoleSelect.addEventListener('change', applyFilters);
}

// Apply filters and re-render
function applyFilters() {
    const selectedParty = filterPartySelect.value;
    const selectedRole = filterRoleSelect.value;

    filteredCandidates = allCandidates.filter(candidate => {
        const matchParty = !selectedParty || candidate.partido_politico === selectedParty;
        const matchRole = !selectedRole || candidate.informacion_adicional.includes(selectedRole);
        return matchParty && matchRole;
    });

    renderCandidates();
}

// Render candidates as cards
function renderCandidates() {
    if (filteredCandidates.length === 0) {
        candidatesContainer.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <h2>No hay candidatos que coincidan con los filtros</h2>
                <p>Intenta cambiar los criterios de búsqueda</p>
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
        : '<span>=÷</span>';

    const photoClass = candidate.foto ? '' : 'no-image';

    return `
        <div class="candidate-card">
            <div class="candidate-photo ${photoClass}">
                ${photoHtml}
            </div>
            <div class="candidate-info">
                <h3 class="candidate-name">${escapeHtml(candidate.nombre)}</h3>
                <span class="candidate-party">${escapeHtml(candidate.partido_politico)}</span>
                <div class="candidate-details">
                    <div class="detail-item">
                        <span class="detail-label">Cargo:</span>
                        <span class="detail-value">${escapeHtml(candidate.informacion_adicional)}</span>
                    </div>
                </div>
            </div>
        </div>
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
