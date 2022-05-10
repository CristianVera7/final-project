import { Link, Outlet } from 'react-router-dom';
import './css/Exercises.css'

function Exercise() {
   
    return (
        <>
            <div className='body'>
                <div className='bodyExercises'>
                    <div className='backgroundLinks2'>
                        <Link className="link2" to="">TODOS</Link>
                        <Link className="link2" to="biceps">BICEPS</Link>
                        <Link className="link2" to="triceps">TRICEPS</Link>
                        <Link className="link2" to="shoulders">HOMBROS</Link>
                        <Link className="link2" to="chest">PECHO</Link>
                        <Link className="link2" to="back">ESPALDA</Link>
                        <Link className="link2" to="abs">ABDOMINALES</Link>
                        <Link className="link2" to="glutes">GLUTEOS</Link>
                        <Link className="link2" to="legs">PIERNAS</Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Exercise;