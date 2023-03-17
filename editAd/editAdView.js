export function buildAddDetail(product, user) {
    
    return `
    <div class="add">
    <form id="editAdForm">

    <label for="editName" class="tittle">Producto:</label>
    <input type="text" id="editName" name="editName" value="${product.name}" size="25" required><br>

    <label for="editPhoto" class="tittle">Foto del producto:</label>
    <input type="url" id="editPhoto" name="editPhoto" value="${product.photo}"><br>
    
    <!-- <label for="editTag" class="tittle">Tag</label>
    <input type="text" id="editTag" name="editTag"> <br> -->
    
    <label for="editDescription">Descripción del producto:</label><br>
    <textarea name="editDescription" id="editDescription" class="tittle" cols="30" rows="10" required>${product.description}</textarea><br>
    
    <label for="editSelect" class="tittle">Este artículo se:</label>
    <select name="editSelect" id="editSelect"> 
            <option value="vende" selected>Se vende</option>
            <option value="busca">Se busca</option>
    </select>
    
    
    <label for="editPrice" class="tittle">por:</label><br>
    <h2 class="productData"><input class ="inputPrice" type="tel" id="editPrice" name="editPrice" minlength="1" size="5" value=${product.price} required> €</h2>
    <p class="minPrice">(Mínimo 1 €)</p>
   
    <div class="buttonsArea">
        <button type="submit" id="submit" class="buttons">Edit Ad</button>
        <button type="reset" id="reset" class="buttons">Reset Info</button>
    </div>

</form>
</div>
`
}