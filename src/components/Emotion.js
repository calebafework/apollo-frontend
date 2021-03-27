import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Comment from './Comment'


export default function Emotion() {
    const playlist = {
        anger: '20Bbvjfo6UGSieemnaa62R',
        disgust: '6SugLh3r9BscE1Srn5Rf6B',
        fear:'6SugLh3r9BscE1Srn5Rf6B',
        joy: '6SugLh3r9BscE1Srn5Rf6B',
        sadness:'6SugLh3r9BscE1Srn5Rf6B',
    }
    
    const getTone = (text) => {
        axios.post("http://localhost:4000/api/v1/emotion")
        .then(tone => {
            console.log(playlist.tone)
        }).catch(err => console.log("TONE ERROR", err))
    }

    return (
        <div>
            { getTone }
        </div>
    )
}
