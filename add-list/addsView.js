export function buildAddView(product) {
    const newAddElement = document.createElement('products');
    newAddElement.classList.add('product')
    //const addDate = new Date(product.date)
 
    newAddElement.innerHTML = `   
        <div class="add">
        <div class="productInfo> 
            <div class="productName">
                <h1>${product.name}</h1>
            </div>
            <div class = "productData">
                <p> Se <span id="isSale" >${product.sale}</span> este producto por:</p>
                <h2>${product.price} €</h2>
                <div class = "typeTag">
                    <p>Tags: <span>${product.tag.join(', ')}. </p>
                </div>
            </div>
            <div class="product-img">
                <img src="${product.photo}">            
                <p>Fecha de creación: </p>
            </div>
        </div>
        </div>
        `;

    return newAddElement;
}

/*xport function buildSpinnerView() {
    return `<div class="spinner"><div></div><div></div><div></div></div>`
  }*/

/*export function buildErrorLoadingAdds() {
    return `<p class="load-error">Ha habido un problema cargando los anuncios. Inténtalo de nuevo más tarde</p>`
}

export function buildEmptyAddList() {
    return `<p>Lo sentimos, todavía no tenemos lo que buscas.</p>`;
}*/