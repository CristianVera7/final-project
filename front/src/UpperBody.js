import React from "react";
import { useEffect, useState } from 'react'
import './css/Exercises.css'
import ForUpperBody from "./ForUpperBody";

function UpperBody() {

    const [exercises, setExercises] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/backRoutes")
            .then(res => res.json())
            .then(res => { 
                let upperbody = []
                Object.values(res.result[0].upper).forEach(bodyPartExercise => {
                    let random1 = Math.floor(Math.random() * bodyPartExercise.length)
                    upperbody.push(bodyPartExercise[random1])
                    bodyPartExercise.splice(random1, 1)
                    let random2 = Math.floor(Math.random() * bodyPartExercise.length)
                    upperbody.push(bodyPartExercise[random2])
                });
                setExercises([...upperbody])
            })
    }, [])

    return (
        <div className="exercises" >
            <ForUpperBody exercises={exercises} />
        </div>
    )
}

export default UpperBody