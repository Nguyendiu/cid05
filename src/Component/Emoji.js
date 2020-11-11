import React from 'react'
import '../Asset/emojii.css'
export function Emoji(props) {
    return (
        <p className="emoji"> {props.symbol} {props.title} </p>

    )
}