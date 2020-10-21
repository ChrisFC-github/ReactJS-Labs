import React from 'react'
import OneChirp from './OneChirp'

let Timeline = (props) => {
   return props.chirps.map(oneChirpFromArray => <OneChirp chirp={oneChirpFromArray}/>)
}

export default Timeline