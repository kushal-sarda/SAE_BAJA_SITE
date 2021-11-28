import React from 'react'
import { useState, useEffect } from 'react';
import "./App"
import App from './App';
import Loader from './components/sae/saemain/Loader';
const Main = () => {
    const [load, setload] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setload(true)
        }, 3000)
    }, [])
    return (
        <>
            {
                (load) ?
                    <App /> : <Loader />
            }
        </>
    )
}

export default Main
