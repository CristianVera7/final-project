import React from "react";
import { useEffect, useState } from 'react'
import './css/Exercises.css'
import Biceps from './Biceps';
import Triceps from './Triceps';
import Shoulders from './Shoulders';
import Chest from './Chest';
import Back from './Back';
import Abs from './Abs';
import Glutes from './Glutes';
import Legs from './Legs';

function All() {
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
            <Biceps exercises={exercises} />
            <Triceps exercises={exercises} />
            <Shoulders exercises={exercises} />
            <Back exercises={exercises} />
            <Chest exercises={exercises} />
            <Abs exercises={exercises} />
            <Glutes exercises={exercises} />
            <Legs exercises={exercises} />
        </div>
    )

};

export default All;