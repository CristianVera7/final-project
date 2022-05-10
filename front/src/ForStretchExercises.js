import React from "react";
import { useEffect, useState } from 'react';
import './css/Stretch.css'

function ForStretchExercises() {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
      fetch("http://localhost:3000/backRoutes")
        .then(res => res.json())
        .then(res => {
          console.log(res);
          setExercises(res)
        })
    }, [])

    return exercises?.result?.map((exercise) => (
        React.Children.toArray(exercise?.stretch?.exercise?.map((stretchExercise) => (
            <div className='stretchCard'>
                <img src={stretchExercise?.img} />
                <div className="stretchMusclesInActivity">
                    <p><strong>Músculos en actividad:</strong></p>
                    <p className="stretchText">{stretchExercise?.muscles}</p>
                </div>
            </div>
        )))
    ))
}

export default ForStretchExercises;