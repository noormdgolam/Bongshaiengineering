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

                <div>
          <button class="mobile-menu-link accordion-toggle" style="width: 100%; border: none; text-align: left; cursor: pointer;">
            Areas We Serve <span>▼</span>
          </button>
          <div class="mobile-submenu">
            <a href="areas-we-serve.html" class="mobile-sub-link">All 64 Districts (Areas We Serve)</a>
            <a href="dhaka-construction-company.html" class="mobile-sub-link">Dhaka</a>
            <a href="chattogram-construction-company.html" class="mobile-sub-link">Chattogram</a>
            <a href="rangpur-construction-company.html" class="mobile-sub-link">Rangpur</a>
            <a href="rajshahi-construction-company.html" class="mobile-sub-link">Rajshahi</a>
            <a href="khulna-construction-company.html" class="mobile-sub-link">Khulna</a>
            <a href="sylhet-construction-company.html" class="mobile-sub-link">Sylhet</a>
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


