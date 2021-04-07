const REACT_APP_API_URL = "http://localhost:4000/api/v1"

export default class CommentModel {
    static create(data) {
        return fetch(`${REACT_APP_API_URL}/comment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }
    static async update(data) {
        await fetch(`${REACT_APP_API_URL}/comment`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }    
    static delete() {
        return fetch(`${REACT_APP_API_URL}/comment`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    static async showAllComments() {
        return fetch(`${REACT_APP_API_URL}/comment`)
            .then(res => res.json())
    }
    static async showById(id) {
        return fetch(`${REACT_APP_API_URL}/comment/${id}`)
            .then(res => res.json())
    }
}
