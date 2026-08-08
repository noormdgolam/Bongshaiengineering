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
    showToast('Quote Request Submitted! Our Engineering team will contact you within 24 hours.');
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
    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: var(--color-accent);">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}
