
export async function getAdds() {
    const productsUrl = 'http://localhost:8000/api/products';
    
    const response = await fetch(productsUrl); //Con este await gestionamos la promesa que devuelve el fetch
    const adds = await response.json(); //Con este await gestionamos la promesa que devuelve el response.json()
    
    return adds
}