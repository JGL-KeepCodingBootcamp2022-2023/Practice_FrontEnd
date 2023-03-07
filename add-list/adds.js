
export async function getAdds() {
    const productsUrl = 'https://gist.githubusercontent.com/edu-aguilar/8c9a509ec582d04da0640be2b0ede8d5/raw/f75c68645821f3c33d82d9c2c048215584d1d332/tweets.json'
    //const productsUrl = 'http://localhost:8000/api/products';
    
    const response = await fetch(productsUrl); //Con este await gestionamos la promesa que devuelve el fetch
    const adds = await response.json(); //Con este await gestionamos la promesa que devuelve el response.jason()
    
    return adds
}