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
                    <p>Tags: ${anuncio.tag.join(', ')}" </p>-->
                </div>
                <div>
            </div>
            <div class="product-img">
                <img src="${product.photo}">            
                <p>Fecha de creación: ${addDate.toISOString()}</p>
            </div>