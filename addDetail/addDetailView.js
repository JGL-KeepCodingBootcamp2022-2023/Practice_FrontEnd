export function buildAddDetail(product, user) {
    const addDate = new Date(product.updatedAt)
    return `
    <div class="add">
        <div class="productInfo"> 
            <div class="userInfo">
                <img src="${product.avatar}" alt="Avatar del usuario">
                <p>User: ${product.userId}</p>
            </div>
            <div class="productName">
                <h1>${product.name}</h1>
                <p>Fecha de publicación: ${addDate.toUTCString()}</p>
            </div>
            <div class="productImg">
                <img src="${product.photo}">            

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