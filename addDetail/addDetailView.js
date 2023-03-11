export function buildAddDetail(product) {
    return `
    <div class="add">
        <div class="productInfo> 
            <div class="userInfo">
                <span><img src="${product.avatar}" alt="Avatar del usuario"> - ${product.username}</span>
            </div>
            <div class="productName">
                <h1>${product.name}</h1>
            </div>
            <div class = "productData">
                <p> Se <span id="isSale" >${product.sale}</span> este producto por:</p>
                <h2>${product.price} €</h2>
                <div class = "typeTag">
                    <p>Tags: <span>${product.tag.join(', ')}.</span> </p>
                </div>
                <div class="description">
                    <h3 class="descriptionTittle">Descripción:<h3>
                    <p>${product.description}</p>
            </div>
            <div class="product-img">
                <img src="${product.photo}">            
                <p>Fecha de creación: </p>
            </div>
        </div>
        <button id="deleteAdd"Delete Add</button>
    </div>
`
}