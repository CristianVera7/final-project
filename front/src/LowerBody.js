import { useEffect, useState } from 'react'
import './css/Exercises.css'
import ForLowerBody from "./ForLowerBody";

function LowerBody() {

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
                    bodyPartExercise.splice(random2, 1)
                    let random3 = Math.floor(Math.random() * bodyPartExercise.length)
                    lowerBody.push(bodyPartExercise[random3])
                    bodyPartExercise.splice(random3, 1)
                    let random4 = Math.floor(Math.random() * bodyPartExercise.length)
                    lowerBody.push(bodyPartExercise[random4])
                    bodyPartExercise.splice(random4, 1)
                });
                setExercises([...lowerBody])
                
            })
    }, [])

    return (
        <div className="exercises" >
            <ForLowerBody exercises={exercises} />
        </div>
    )
}

export default LowerBody