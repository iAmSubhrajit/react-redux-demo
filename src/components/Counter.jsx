import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber, subNumber } from '../redux/actions'

function Counter() {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const inputref = useRef(null)
    useEffect(() => {
        inputref.current.focus()
    }, [])
    return (
        <div>
            <h1>{counter}</h1>
            <input type="number" ref={inputref} placeholder="Enter value" /><br /><br />
            <button onClick={() => dispatch(addNumber(inputref.current.value))} type='button'>Increase</button>
            <button onClick={() => dispatch(subNumber(inputref.current.value))} type='button'>Decrease</button>
        </div>
    )
}

export default Counter