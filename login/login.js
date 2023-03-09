export async function loginUser(email, password) {
    const user = {
        username: email,
        password: password
    }

    //Consume el API sparrets utilizando el método POST y enviando los datos que ha introducido el usuario
    const response = await fetch ('http://localhost:8000/auth/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "applicatin/json"
        }
    })

    //Gestión de la respuesta
    if(!response.ok) {
        throw new Error('Error al identificar al usuari@ ')
    }
}
