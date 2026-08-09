/**
 * Bongshai Engineering & Construction - Main App Module
 * Clean light mode engineering theme, mobile drawer navigation, active link highlighting, and estimator
 */

import { initEstimator } from './estimator.js';
import { initPortfolio } from './portfolio.js';
import { BUSINESS_UNITS } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('data-theme', 'light');
  initMobileDrawer();
  highlightActiveNav();
  initEstimator();
  initPortfolio();
  initBusinessUnitTabs();
});

/* --------------------------------------------------------------------------
   1. Mobile Drawer Navigation & Accordion Controller
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  if (!document.getElementById('mobileDrawerOverlay')) {
    const drawer = document.createElement('div');
    drawer.id = 'mobileDrawerOverlay';
    drawer.className = 'mobile-drawer';
    drawer.innerHTML = `
      <div class="mobile-drawer-header">
        <div style="font-weight: 800; font-size: 1.1rem; color: var(--color-text-main);">
          BONGSHAI <span style="color: var(--color-accent-hover);">E&C</span>
        </div>
        <button id="mobileDrawerCloseBtn" class="mobile-drawer-close">✕</button>
      </div>

      <div class="mobile-menu-list">
        <a href="index.html" class="mobile-menu-link">Home</a>
        
        <div>
          <button class="mobile-menu-link accordion-toggle" style="width: 100%; border: none; text-align: left; cursor: pointer;">
            Company <span>▼</span>
          </button>
          <div class="mobile-submenu">
            <a href="general-information.html" class="mobile-sub-link">General Information</a>
            <a href="about-us.html" class="mobile-sub-link">About Company</a>
            <a href="organization-chart.html" class="mobile-sub-link">Organization Chart</a>
            <a href="manpower.html" class="mobile-sub-link">Manpower of Company</a>
            <a href="mission-vision.html" class="mobile-sub-link">Our Mission & Vision</a>
          </div>
        </div>

        <div>
          <button class="mobile-menu-link accordion-toggle" style="width: 100%; border: none; text-align: left; cursor: pointer;">
            Business Unit <span>▼</span>
          </button>
          <div class="mobile-submenu">
            <a href="civil-infrastructure.html" class="mobile-sub-link">Civil Infrastructure</a>
            <a href="rcc-building.html" class="mobile-sub-link">RCC Building Construction</a>
            <a href="architectural-construction.html" class="mobile-sub-link">Architectural Construction</a>
            <a href="peb-steel.html" class="mobile-sub-link">Pre-engineering building (PEB)</a>
            <a href="industrial-construction.html" class="mobile-sub-link">Industrial Construction</a>
            <a href="power-energy.html" class="mobile-sub-link">Electrical, Power & Energy</a>
            <a href="heavy-rigging.html" class="mobile-sub-link">Heavy Rigging & Lifting</a>
          </div>
        </div>

        <div>
          <button class="mobile-menu-link accordion-toggle" style="width: 100%; border: none; text-align: left; cursor: pointer;">
            Services <span>▼</span>
          </button>
          <div class="mobile-submenu">
            <a href="engineering-services.html" class="mobile-sub-link">Engineering Services</a>
            <a href="project-management.html" class="mobile-sub-link">Project Management</a>
            <a href="quality-control.html" class="mobile-sub-link">Quality Control</a>
            <a href="health-safety.html" class="mobile-sub-link">Health & Safety Policy</a>
            <a href="construction-work.html" class="mobile-sub-link">Construction Work</a>
          </div>
        </div>

        <div>
          <button class="mobile-menu-link accordion-toggle" style="width: 100%; border: none; text-align: left; cursor: pointer;">
            Project <span>▼</span>
          </button>
          <div class="mobile-submenu">
            <a href="executed-projects.html" class="mobile-sub-link">Executed Projects (13 Mega Projects)</a>
            <a href="ongoing-projects.html" class="mobile-sub-link">Ongoing Projects</a>
          </div>
        </div>

        <div>
          <button class="mobile-menu-link accordion-toggle" style="width: 100%; border: none; text-align: left; cursor: pointer;">
            Media & Fleet <span>▼</span>
          </button>
          <div class="mobile-submenu">
            <a href="photo-gallery.html" class="mobile-sub-link">Photo Gallery</a>
            <a href="equipment-fleet.html" class="mobile-sub-link">Tools & Heavy Machinery Fleet</a>
            <a href="careers.html" class="mobile-sub-link">Careers & Job Circular</a>
          </div>
        </div>

        <a href="contact-us.html" class="mobile-menu-link" style="background: var(--color-accent); color: #0f172a;">Contact Us</a>
      </div>
    `;
    document.body.appendChild(drawer);
  }

  const mobileNavToggles = document.querySelectorAll('.mobile-nav-toggle');
  const drawerOverlay = document.getElementById('mobileDrawerOverlay');
  const closeBtn = document.getElementById('mobileDrawerCloseBtn');

  mobileNavToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      drawerOverlay.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      drawerOverlay.classList.remove('active');
    });
  }

  document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const submenu = e.currentTarget.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   2. Active Link Highlighting
   -------------------------------------------------------------------------- */
function highlightActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mega-menu-item').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) {
      link.classList.add('active');
    }
  });
}

/* --------------------------------------------------------------------------
   3. Business Units Tab Explorer (Homepage "Core Competencies")
   -------------------------------------------------------------------------- */
const UNIT_ICONS = {
  infrastructure: '🏗️',
  building: '🏬',
  steel: '🏭',
  factory: '⚙️',
  power: '⚡',
  telecom: '📡',
  mep: '🔌'
};

const UNIT_IMAGES = {
  'civil-infrastructure': 'images/civil-infrastructure-piling.jpg',
  'rcc-building': 'images/rcc-building-highrise.jpg',
  'peb-steel': 'images/steel-fabrication-workshop.jpg',
  'industrial': 'images/garment-factory-industrial.jpg',
  'power-energy': 'images/power-energy-plant.jpg',
  'telecom-it': 'images/engineering-team-site.jpg',
  'electro-mechanical': 'images/quality-control-testing.jpg'
};

function initBusinessUnitTabs() {
  const tabNav = document.getElementById('unitTabNav');
  const tabContent = document.getElementById('unitTabContent');
  if (!tabNav || !tabContent) return;

  tabNav.innerHTML = BUSINESS_UNITS.map((unit, i) => `
    <button class="tab-btn${i === 0 ? ' active' : ''}" data-unit="${unit.id}" type="button">
      <span aria-hidden="true">${UNIT_ICONS[unit.icon] || '🔧'}</span> ${unit.name}
    </button>
  `).join('');

  tabContent.innerHTML = BUSINESS_UNITS.map((unit, i) => `
    <div class="tab-pane${i === 0 ? ' active' : ''}" data-unit="${unit.id}">
      <div class="unit-card-grid">
        <div class="unit-info">
          <h3>${unit.name}</h3>
          <div class="unit-tagline">${unit.tagline}</div>
          <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.7; margin-top: 0.5rem;">${unit.description}</p>
          <ul class="unit-list">
            ${unit.subItems.map(item => `
              <li class="unit-list-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg); min-height: 320px;">
          <img loading="lazy" src="${UNIT_IMAGES[unit.id] || 'images/construction-site-hero.jpg'}" alt="${unit.name} by Bongshai Engineering & Construction" style="width: 100%; height: 100%; object-fit: cover; display: block;">
        </div>
      </div>
    </div>
  `).join('');

  tabNav.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const unitId = btn.getAttribute('data-unit');
      tabNav.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      tabContent.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.toggle('active', pane.getAttribute('data-unit') === unitId);
      });
    });
  });
}
