import { useEffect, useState } from 'react'
import './css/Workout.css'
import LowerBodyForFullBody from "./LowerBodyForFullBody";

function ForFullBody() {

    const [exercises, setExercises] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/backRoutes")
            .then(res => res.json())
            .then(res => { 
                let lowerBody = []
                Object.values(res.result[0].lower).forEach(bodyPartExercise => {
                    let random1 = Math.floor(Math.random() * bodyPartExercise.length)
                    lowerBody.push(bodyPartExercise[random1])
                    bodyPartExercise.splice(random1, 1)
                    let random2 = Math.floor(Math.random() * bodyPartExercise.length)
                    lowerBody.push(bodyPartExercise[random2])
                });
                setExercises([...lowerBody])
                
            })
    }, [])

    return (
        <div className="exercises" >
            <LowerBodyForFullBody exercises={exercises} />
        </div>
    )
}

export default ForFullBody