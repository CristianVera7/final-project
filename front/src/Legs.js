import React from "react";
import { useEffect, useState } from 'react'
import './css/Exercises.css'
import ForGlutes from "./ForGlutes";

function Glutes() {
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
            <ForGlutes exercises={exercises} />
        </div>
    )

};

export default Glutes;