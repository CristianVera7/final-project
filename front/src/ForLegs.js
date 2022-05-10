import React from "react";

function ForLegs(props) {

    return props?.exercises?.result?.map((exercise) => (
        React.Children.toArray(exercise?.lower?.legs?.map((leg) => (
            <div className='card'>
                <p className="titleExercise"><strong>{leg?.name}</strong></p>
                <img src={leg?.img} />
                <div className="musclesInActivity">
                    <p><strong>Músculos en actividad:</strong></p>
                    <p className="text">{leg?.muscles}</p>
                </div>
                <div className="equipment">
                    <p><strong>Equipamiento necesario:</strong></p>
                    <p className="text">{leg?.equipment}</p>
                </div>
            </div>
        )))
    ))
}

export default ForLegs