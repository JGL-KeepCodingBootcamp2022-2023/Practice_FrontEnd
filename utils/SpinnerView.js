export function buildSpinnerView(element) {
  console.log('Pongo el spinner')
  return `<div class="spinner"><div></div><div></div><div></div></div>`
};

export function hideSpinner(element) {     
  console.log('se quita el spinner')                 
  element.classList.replace('spinnerView', 'hide')
  //element.innerHTML = '';
 };