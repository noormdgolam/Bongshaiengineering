/**
 * Bongshai Engineering & Construction - Portfolio Controller (UPGRADED)
 * Dynamic project rendering, modal viewer, project comparison tool, and category filtering
 */

import { EXECUTED_PROJECTS } from './data.js';

export function initPortfolio() {
  const container = document.getElementById('projectGrid');
  const filterContainer = document.getElementById('portfolioFilters');
  const modalOverlay = document.getElementById('projectModalOverlay');
  const modalContent = document.getElementById('projectModalContent');
  const modalClose = document.getElementById('modalCloseBtn');

  if (!container) return;

  let currentCategory = 'all';

  function renderProjects(category = 'all') {
    const filtered = category === 'all' 
      ? EXECUTED_PROJECTS 
      : EXECUTED_PROJECTS.filter(p => p.category === category);

    container.innerHTML = filtered.map(p => `
      <div class="project-card" data-id="${p.id}" data-category="${p.category}">
        <div class="project-card-header">
          <span class="project-badge">${p.badge}</span>
          <div class="project-client">${p.client}</div>
          <h3 class="project-title">${p.project}</h3>
        </div>
        <div class="project-card-body">
          <div class="project-meta">
            <div class="meta-item">
              <span>Location:</span>
              <strong>${p.location}</strong>
            </div>
            <div class="meta-item">
              <span>Execution Year:</span>
              <strong>${p.year}</strong>
            </div>
          </div>
          <p class="project-desc">${p.description}</p>
          <div style="display: flex; gap: 0.5rem; margin-top: auto;">
            <a href="project-detail.html?id=${p.id}" class="btn btn-outline project-view-btn" style="flex: 1; padding: 0.6rem 0.75rem; font-size: 0.825rem; text-align: center; text-decoration: none;">
              View Full Specs
            </a>
            <button class="btn btn-primary project-compare-btn" data-id="${p.id}" style="padding: 0.6rem 0.75rem; font-size: 0.825rem;">
              Compare
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach comparison listeners
    container.querySelectorAll('.project-compare-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.getAttribute('data-id'));
        openComparisonModal(id);
      });
    });
  }

  function openComparisonModal(projectId) {
    const p1 = EXECUTED_PROJECTS.find(p => p.id === projectId);
    const p2 = EXECUTED_PROJECTS.find(p => p.id !== projectId) || EXECUTED_PROJECTS[0];

    modalContent.innerHTML = `
      <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 1.25rem; color: var(--color-primary);">Structural Project Comparison Tool</h3>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
        <div style="background: var(--color-bg-card-alt); padding: 1.25rem; border-radius: var(--radius-md); border-left: 4px solid var(--color-accent);">
          <span class="project-badge" style="position: static; font-size: 0.7rem;">${p1.badge}</span>
          <h4 style="font-weight: 800; margin-top: 0.5rem;">${p1.project}</h4>
          <p style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 0.75rem;">Client: ${p1.client}</p>
          <ul style="font-size: 0.85rem; display: flex; flex-direction: column; gap: 0.4rem;">
            <li><strong>Type:</strong> ${p1.typeOfWork}</li>
            <li><strong>Location:</strong> ${p1.location}</li>
            <li><strong>Year:</strong> ${p1.year}</li>
          </ul>
        </div>

        <div style="background: var(--color-bg-card-alt); padding: 1.25rem; border-radius: var(--radius-md); border-left: 4px solid var(--color-primary);">
          <span class="project-badge" style="position: static; font-size: 0.7rem;">${p2.badge}</span>
          <h4 style="font-weight: 800; margin-top: 0.5rem;">${p2.project}</h4>
          <p style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 0.75rem;">Client: ${p2.client}</p>
          <ul style="font-size: 0.85rem; display: flex; flex-direction: column; gap: 0.4rem;">
            <li><strong>Type:</strong> ${p2.typeOfWork}</li>
            <li><strong>Location:</strong> ${p2.location}</li>
            <li><strong>Year:</strong> ${p2.year}</li>
          </ul>
        </div>
      </div>

      <div style="text-align: right;">
        <button class="btn btn-primary" onclick="document.getElementById('projectModalOverlay').classList.remove('active')">
          Done Comparing
        </button>
      </div>
    `;

    modalOverlay.classList.add('active');
  }

  // Filter Bar Handlers
  if (filterContainer) {
    filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentCategory = e.currentTarget.getAttribute('data-filter');
        renderProjects(currentCategory);
      });
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', () => modalOverlay.classList.remove('active'));
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  // Initial Render
  renderProjects('all');
}
