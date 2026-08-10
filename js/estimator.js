/**
 * Bongshai Engineering & Construction - RFQ / Construction Estimator
 * Interactive feasibility calculator and quote request wizard
 */

export function initEstimator() {
  const form = document.getElementById('rfqEstimatorForm');
  const resultCard = document.getElementById('estimatorResult');
  const projectTypeInput = document.getElementById('calcProjectType');
  const areaInput = document.getElementById('calcArea');
  const storiesInput = document.getElementById('calcStories');
  const outputBudget = document.getElementById('outputBudget');
  const outputTimeline = document.getElementById('outputTimeline');

  if (!form) return;

  const formLoadedAt = Date.now();

  const costRates = {
    "peb-steel": { min: 350, max: 550, timelineMonthsPer10kSqft: 1.5 }, // BDT per sqft rate or relative index
    "rcc-building": { min: 2200, max: 3200, timelineMonthsPer10kSqft: 4 },
    "civil-infrastructure": { min: 1500, max: 2500, timelineMonthsPer10kSqft: 3 },
    "power-substation": { min: 4000, max: 6500, timelineMonthsPer10kSqft: 2 }
  };

  function calculateEstimate() {
    const type = projectTypeInput.value;
    const area = parseFloat(areaInput.value) || 0;
    const stories = parseInt(storiesInput.value) || 1;

    if (area <= 0) {
      if (resultCard) resultCard.style.display = 'none';
      return;
    }

    const rates = costRates[type] || costRates["peb-steel"];
    const totalSqft = area * stories;
    
    // Estimate Calculation (Approximate index for structural feasibility)
    const minEstLakh = (totalSqft * rates.min) / 100000;
    const maxEstLakh = (totalSqft * rates.max) / 100000;
    const estMonths = Math.max(2, Math.ceil((totalSqft / 10000) * rates.timelineMonthsPer10kSqft));

    if (outputBudget) {
      outputBudget.innerText = `৳ ${minEstLakh.toFixed(1)} Lakh - ৳ ${maxEstLakh.toFixed(1)} Lakh (BDT)`;
    }
    if (outputTimeline) {
      outputTimeline.innerText = `${estMonths} - ${estMonths + 3} Months`;
    }

    if (resultCard) {
      resultCard.style.display = 'block';
    }
  }

  [projectTypeInput, areaInput, storiesInput].forEach(el => {
    if (el) el.addEventListener('input', calculateEstimate);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const honeypot = document.getElementById('rfqWebsite');
    // Bot signal 1: honeypot field got filled in (real users never see it).
    if (honeypot && honeypot.value) {
      return;
    }
    // Bot signal 2: submitted implausibly fast for a human to fill the form.
    if (Date.now() - formLoadedAt < 3000) {
      return;
    }

    const categoryLabel = projectTypeInput.options[projectTypeInput.selectedIndex]
      ? projectTypeInput.options[projectTypeInput.selectedIndex].text
      : projectTypeInput.value;
    const area = areaInput.value;
    const stories = storiesInput.value;
    const phone = document.getElementById('clientContactPhone')
      ? document.getElementById('clientContactPhone').value
      : '';
    const budget = outputBudget ? outputBudget.innerText : 'Not calculated';
    const timeline = outputTimeline ? outputTimeline.innerText : 'Not calculated';

    const subject = `RFQ: ${categoryLabel} - ${area} sqft`;
    const body = `Project Structural Category: ${categoryLabel}\n` +
      `Building Plinth Area: ${area} Sq. Ft\n` +
      `Number of Floors / Levels: ${stories}\n` +
      `Phone / WhatsApp: ${phone}\n\n` +
      `Preliminary Feasibility Estimate:\n` +
      `Budget Range: ${budget}\n` +
      `Timeline: ${timeline}`;

    const mailtoLink = `mailto:info@bongshai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    showToast('Opening your email app to send this RFQ to info@bongshai.com...');
    form.reset();
    if (resultCard) resultCard.style.display = 'none';
  });
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: var(--color-success);">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}
