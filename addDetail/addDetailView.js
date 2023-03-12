export function buildAddDetail(product) {
    return `
    <div class="add">
        <div class="productInfo"> 
            <div class="userInfo">
                <img src="${product.avatar}" alt="Avatar del usuario">
                <p>${product.username}</p>
            </div>
            <div class="productName">
                <h1>${product.name}</h1>
                <p>Fecha de publicación: </p>
            </div>
            <div class="productImg">
                <img src="${product.photo}">            
                <p>Tags: <span>${product.tag.join(', ')}.</span> </p>
            </div>
            </div>
            <div class="description">
            <h3 class="descriptionTittle">Descripción:<h3>
            <p>${product.description}</p>
            <div class = "productData">
                <p> Se <span id="isSale" >${product.sale}</span> este producto por:</p>
                <h2>${product.price} €</h2>
                <div class = "typeTag">
            </div>
        </div>
        <button id="deleteAdd">Delete Add</button>
    </div>
`
}