export let statusAddsList = 0;
export async function getAdds() {
    const productsUrl = 'http://localhost:8000/api/products';
    
    var response = await fetch(productsUrl); //Con este await gestionamos la promesa que devuelve el fetch
    const adds = await response.json(); //Con este await gestionamos la promesa que devuelve el response.json()
    
    if(!response.ok) {
        throw new Error('Error al identificar al usuari@ ')
    }

    statusAddsList = response.status
    return adds
}