import React from 'react'
import Component1 from './Component1'

const Button = ({count}) => {
    return (
        <>
            <div>
                button
            </div>
            <Component1 count={count}/>
        </>


    )
}

export default Button
