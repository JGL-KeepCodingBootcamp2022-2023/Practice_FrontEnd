export function buildSpinnerView(element) {
    return `<div class="spinner"><div></div><div></div><div></div></div>`
  };

export function hideSpinner(element) {                      
    element.innerHTML = '';
    element.classList.replace('spinnerView', 'hide')
  };