
export const getAddById = async (addId) => {
    const response = await fetch(`http://localhost:8000/api/products/${addId}`)

    if(!response.ok) {
        throw new Error("Ad doesn't exist")
    }

    const add = await response.json()

    return add
}

export const deleteAdd = async (addId) => {
    const token =localStorage.getItem('token')

    const response = await fetch(`http://localhost:8000/api/products/${addId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
        }
    })

}
