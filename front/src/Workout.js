import { Link, Outlet } from 'react-router-dom';
import './css/Exercises.css'

function Workout() {
   

    return (
        <>
            <div className='body'>
                <div className='bodyExercises'>
                    <div className='backgroundLinks2'>
                        <Link className="link2" to="">FULL BODY</Link>
                        <Link className="link2" to="upperbody">PARTE SUPERIOR</Link>
                        <Link className="link2" to="lowerbody">PARTE INFERIOR</Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Workout;