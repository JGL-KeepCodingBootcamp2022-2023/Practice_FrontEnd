
export async function createAdd(addAvatar, addName, addSelect, addPrice, addPhoto, addDescription) {
  const token = localStorage.getItem('token')
 
    const newAdd = {
        avatar: addAvatar,
        name: addName,
        select: addSelect,
        price: addPrice,
        photo: addPhoto,
        description: addDescription
        //tag: addTag
        };

    //Consume el API sparrets utilizando el método POST y enviando los datos que ha introducido el usuario
    const response = await fetch('http://localhost:8000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(newAdd)
      })

    //Gestión de la respuesta
    if (!response.ok) {
        throw new Error('Error creating add')
    }

}