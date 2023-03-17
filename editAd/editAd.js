export const getAddById = async (addId) => {
    const response = await fetch(`http://localhost:8000/api/products/${addId}`)

    //Gestión del error
    if(!response.ok) {
        throw new Error("Ad doesn't exist")
    }

    const add = await response.json()

    return add
}


export async function editAd(editAvatar, editName, editSelect, editPrice, editPhoto, editDescription) {
    const token = localStorage.getItem('token')
   
      const newAdd = {
          avatar: editAvatar,
          name: editName,
          select: editSelect,
          price: editPrice,
          photo: editPhoto,
          description: editDescription
          //tag: editTag
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