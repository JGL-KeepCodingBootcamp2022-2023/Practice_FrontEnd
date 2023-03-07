export function buildAddView(product) {
    const newAddElement = document.createElement('products');
    newAddElement.classList.product('product')
    const addDate = new Date(product.date)

    newAddElement.innerHTML = `
        <div class="add">
            <div class="user-info>    
                <span>${product.user}</span>
                <img src="${product.avatar}">
            </div>   
        <div class="product-info> 
            <div class="product-name">
                <p>${product.name}</p>
            <div class = "product-tags">
                <% if (${product.sale}) { %>
                    <p>Precio de venta: <b><%=  ${product.price} %> €</b></p>
                <% } else { %>
                    <p>Se busca por: <b><%= ${product.price} %> €</b></p>
                <% } %>
                    <h3>Descripción:</h3>
                    <p>${product.description}</p>
                <div class = "type-tag">
                    <p>Tags: "<%= ${anuncio.tag.join(', ')} %>" </p>
                </div>
                <div>
            </div>
            <div class="product-img">
                <img src="${product.photo}">            
                <p>Fecha de creación: ${addDate.toISOString()}</p>
            </div>
        </div>
        `;

    return newAddElement;
}

export function buildSpinnerView() {
    return `<div class="spinner"><div></div><div></div><div></div></div>`
  }

/*export function buildErrorLoadingAdds() {
    return `<p class="load-error">Ha habido un problema cargando los anuncios. Inténtalo de nuevo más tarde</p>`
}

export function buildEmptyAddList() {
    return `<p>Lo sentimos, todavía no tenemos lo que buscas.</p>`;
}*/