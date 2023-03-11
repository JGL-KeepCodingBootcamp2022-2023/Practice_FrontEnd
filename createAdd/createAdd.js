export async function createAdd(addAvatar, addName, addSelect, addPrice, addPhoto, addDescription, addTag) {
    
    const newAdd = {
        avatar: addAvatar,
        name: addName,
        select: addSelect,
        price: addPrice,
        photo: addPhoto,
        description: addDescription,
        tag: addTag
        };

    //Consume el API sparrets utilizando el método POST y enviando los datos que ha introducido el usuario
    const response = await fetch ('http://localhost:8000/products', {
        method: 'POST',
        headers: {
            "Content-Type": "applicatin/json",
            "Authoritation": `Bearer ${token}`,
        },
        body: JSON.stringify(newAdd)     
    })

    //Gestión de la respuesta
    if(!response.ok) {
        throw new Error('Error al crear el anuncio')
    }
}