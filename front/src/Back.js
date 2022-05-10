import React from "react";
import { useEffect, useState } from 'react'
import './css/Exercises.css'
import ForBack from "./ForBack";

function Back() {
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
            <ForBack exercises={exercises} />
        </div>
    )

};

export default Back;