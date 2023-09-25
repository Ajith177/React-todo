import React from 'react'
import { useNavigate } from 'react-router-dom'

function Button() {
    const moving = useNavigate()

    const click = () => {
        moving('/First')
    }
    return (<button onClick={click}>Project</button>
    )
}

export default Button
