import React, { useState, useEffect } from 'react';

const UseEffect = ({ id }) => {
    const [message, setMessage] = useState('Hi there, how are you?');
    const swarna = "seaaaa"
    const red = "reddd"
    useEffect(() => {
        console.log(swarna)
        console.log(red)
    }, [swarna, red])
    useEffect(() => {
        console.log('trigger use effect hook');

        setTimeout(() => {
            setMessage("I'm fine, thanks for asking.");
        }, 1000)
    })

    return <h1>{message} {red + swarna}</h1>
}

export default UseEffect;