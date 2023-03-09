export function buildSpinnerView(element) {
  return `<div class="spinner" id="spinner"><div></div><div></div><div></div></div>`
};

export function hideSpinner(element) {     
  const byeSpinner = element.querySelector('#spinner')  
  byeSpinner.parentNode.removeChild(byeSpinner)               
  //element.classList.replace('spinnerView', 'hide')
  //element.innerHTML = '';
 };