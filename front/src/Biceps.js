import React from "react";
import { useEffect, useState } from 'react'
import './css/Exercises.css'
import ForBiceps from "./ForBiceps";

function Biceps() {
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
            <ForBiceps exercises={exercises} />
        </div>
    )

};

export default Biceps;