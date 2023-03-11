export const getAddById = async (addId) => {
    const response = await fetch(`http://localhost:8000/api/products/${tweetId}`)

    //Gestión del error
    if(!response.ok) {
        throw new Error('El anuncio solicitado no existe')
    }

    const add = await response.jason()

    return add
}

export const deleteAdd = async (addId) => {
    const token =localStorage.getItem('token')

    const response = await fetch(`http://localhost:8000/api/products/${addId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authoritation': `Bearer ${token}`

        },
    })
}