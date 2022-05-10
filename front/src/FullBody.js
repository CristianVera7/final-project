import React from "react";
import './css/Workout.css'
import UpperBody from "./UpperBody";
import ForFullBody from "./ForFullBody";

function FullBody() {
    return (
        <div className="exercisesWorkout" >
            <UpperBody />
            <ForFullBody />
        </div>
    )
}

export default FullBody