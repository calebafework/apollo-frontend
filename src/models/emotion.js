const REACT_APP_API_URL = "http://localhost:4000/api/v1"

export default class EmotionModel {
    static show(mood){
        return fetch(`${REACT_APP_API_URL}/`)
            .then(res => res.json())
    }
}
