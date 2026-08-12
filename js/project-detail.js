import { EXECUTED_PROJECTS } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('projectDetailContainer');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  let projectId = parseInt(urlParams.get('id'));

  // Fallback to project 1 if no ID is provided (useful for direct testing/previewing)
  if (isNaN(projectId)) {
    projectId = 1;
  }

  const project = EXECUTED_PROJECTS.find(p => p.id === projectId);

  if (!project) {
    container.innerHTML = `
      <div style="text-align: center; padding: 5rem 1rem;">
        <h1 style="font-size: 2rem; color: var(--color-danger); margin-bottom: 1rem;">Project Not Found</h1>
        <p style="color: var(--color-text-muted); margin-bottom: 2rem;">The project you are looking for does not exist or has been removed.</p>
        <div style="background: #f8d7da; color: #721c24; padding: 1rem; border-radius: 4px; display: inline-block; margin-bottom: 2rem; font-family: monospace; text-align: left;">
          <strong>Debug Info:</strong><br>
          URL: ${window.location.href}<br>
          Search: ${window.location.search}<br>
          Parsed ID: ${projectId}<br>
          (If Search is empty, your local server might be stripping query strings. Please use the '?id=X' format.)
        </div>
        <br>
        <a href="executed-projects.html" class="btn btn-primary">Return to Portfolio</a>
      </div>
    `;
    return;
  }

  // Set page title
  document.title = `${project.project} | Bongshai Engineering`;

  // Gallery generation
  const galleryImages = project.images && project.images.length > 0 
    ? project.images 
    : ['images/project-placeholder-1.jpg', 'images/project-placeholder-2.jpg', 'images/project-placeholder-3.jpg', 'images/project-placeholder-4.jpg'];

  const galleryHTML = galleryImages.map(img => `
    <div class="gallery-item">
      <img src="${img}" alt="${project.project} execution phase" loading="lazy" onerror="this.src='images/mega-project-portfolio.jpg'">
    </div>
  `).join('');

  container.innerHTML = `
    <!-- Project Hero -->
    <div class="project-detail-hero">
      <div class="container" style="position: relative; z-index: 2;">
        <span class="project-badge" style="margin-bottom: 1rem; display: inline-block;">${project.badge}</span>
        <div class="project-client-large">${project.client}</div>
        <h1 class="project-title-huge">${project.project}</h1>
      </div>
      <div class="hero-bg-overlay"></div>
    </div>

    <!-- Project Content -->
    <div class="section" style="background: var(--color-bg-main);">
      <div class="container">
        
        <div class="project-detail-grid">
          
          <!-- Left: Details -->
          <div class="project-info-panel">
            <h3 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 1.5rem; color: var(--color-primary);">Project Specifications</h3>
            
            <div class="spec-list">
              <div class="spec-item">
                <span class="spec-label">Principal Contractor</span>
                <span class="spec-value">${project.principalContractor}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Location</span>
                <span class="spec-value">${project.location}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Execution Year</span>
                <span class="spec-value">${project.year}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Type of Work</span>
                <span class="spec-value">${project.typeOfWork}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Category</span>
                <span class="spec-value" style="text-transform: capitalize;">${project.category}</span>
              </div>
            </div>
          </div>

          <!-- Right: Description -->
          <div class="project-desc-panel">
            <h3 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 1rem; color: var(--color-primary);">Execution Overview</h3>
            <p style="font-size: 1.1rem; color: var(--color-text-muted); line-height: 1.8;">
              ${project.description}
            </p>
          </div>

        </div>

        <!-- Project Gallery -->
        <div style="margin-top: 4rem;">
          <h3 style="font-size: 1.75rem; font-weight: 800; margin-bottom: 2rem; color: var(--color-text-main); text-align: center;">Project Gallery</h3>
          <div class="project-gallery-grid">
            ${galleryHTML}
          </div>
          <p style="text-align: center; margin-top: 1.5rem; color: var(--color-text-muted); font-size: 0.9rem;">
            <em>Note: Images can be added or updated via the data store.</em>
          </p>
        </div>

        <div style="text-align: center; margin-top: 4rem;">
          <a href="executed-projects.html" class="btn btn-outline">← Back to Portfolio</a>
        </div>

      </div>
    </div>
  `;
});
