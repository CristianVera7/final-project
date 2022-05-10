import React from "react";
import { useEffect, useState } from 'react'
import './css/Exercises.css'
import ForTriceps from "./ForTriceps";

function Triceps() {
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
            <ForTriceps exercises={exercises} />
        </div>
    )

};

export default Triceps;