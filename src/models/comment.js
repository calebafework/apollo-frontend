const REACT_APP_API_URL = "http://localhost:4000/api/v1"

export default class CommentModel {
    static create(data) {
        return fetch(`${REACT_APP_API_URL}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }
    static async update(data) {
        await fetch(`${REACT_APP_API_URL}/comments`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }    
    static delete(data) {
        return fetch(`${REACT_APP_API_URL}/comments`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    //What should replace the ID? maybe emotions?
    static show(data) {
        return fetch(`${REACT_APP_API_URL}/comments`)
            .then(res => res)
    }
    static index() {
        return fetch(`${REACT_APP_API_URL}/comments`)
            .then(res => res.json())
    }
}
