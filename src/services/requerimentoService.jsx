const BASE_URL = "http://localhost:3000"

export async function listarRequerimentos(){
    try {
        const response = await fetch(`${BASE_URL}/requerimentos`)
        return await response.json();

    } catch (error) {
        return {
            message: "Error", error
        }
    }
}

export async function criarRequerimento(requerimento){
    try {
        const response = await fetch(`${BASE_URL}/requerimentos`, {
            method: 'POST',
            body: JSON.stringify(requerimento),
            headers: {
                "content-type": "application/json"
            }
        })
        return await response.json();
    } catch (error) {
        return {
            message: "error", error
        }
    }
}