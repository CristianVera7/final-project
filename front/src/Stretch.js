import './css/Stretch.css'
import ForStretchExercises from './ForStretchExercises';

function Stretch() {
    

    return (
        <>
            <div>
                <div className='bodyStretchExercises'>
                    <div className='stretchBackgroundLinks'>
                        <p className='stretchLink'><strong>Anotación:</strong> Cada estiramiento durará cómo máximo 15 segundos, cambiaremos a la extremidad opuesta, si lo requiere el ejercicio.</p>
                    </div>
                </div>
                <div className='stretchExercises'>
                <ForStretchExercises />
                </div>
            </div>
        </>
    );
}

export default Stretch;