import React from 'react'
import '../Asset/emojii'
export function Emoji(props) {
    return (
        <p className="emoji"> {props.symbol} {props.title} </p>

    )
}