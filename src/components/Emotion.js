import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Comment from './Comment'


export default function Emotion() {
    const playlist = {
        anger: 'angerplaylist',
        disgust: 'disgustplaylist',
        fear:'fearplaylist',
        joy: 'joyplaylist',
        sadness:'sadnessplaylist'
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
