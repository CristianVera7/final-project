import React from "react";
import { useEffect, useState } from 'react'
import './css/Stretch.css'
import ForStretchExercises from "./ForStretchExercises";

function StretchExercises() {
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
        <div >
            <ForStretchExercises exercises={exercises} />
        </div>
    )

};

export default StretchExercises;