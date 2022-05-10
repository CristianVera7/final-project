import './css/Workout.css'

function LowerBodyForFullBody({ exercises }) {

  return (exercises?.map((exercise) => (
    <div className='cardWorkout'>
      <p className="titleWorkout"><strong>{exercise?.name}</strong></p>
      <img src={exercise?.img} />
      <div className="workout">
      <p><strong>Pautas para el ejercicio:</strong></p>
        <p className="textWorkout"><strong><u>Principiante:</u></strong><i>{exercise?.workout?.principiante}</i></p>
        <p className="textWorkout"><strong><u>Avanzado:</u></strong><i>{exercise?.workout?.avanzado}</i></p>
      </div>
      <div className="equipmentWoerkout">
        <p><strong>Equipamiento necesario:</strong></p>
        <p className="textWorkout">{exercise?.equipment}</p>
      </div>
    </div>
  )))

}

export default LowerBodyForFullBody