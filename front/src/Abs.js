import React from "react";
import { useEffect, useState } from 'react'
import './css/Exercises.css'
import ForAbs from "./ForAbs";

function Abs() {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/backRoutes")
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setExercises(res)
            })
    }, [])

    return (
        <div className='exercises'>
            <ForAbs exercises={exercises} />
        </div>
    )

};

export default Abs;