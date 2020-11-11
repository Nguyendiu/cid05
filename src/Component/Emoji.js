import React from 'react'
import "../Asset/Emoji"
export function Emoji(props) {
    return (
        <p className="emoji"> {props.symbol} {props.title} </p>

    )
}