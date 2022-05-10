import { Link, Outlet } from 'react-router-dom';
import './css/Exercises.css'

function Users() {
   
    return (
        <>
            <div className='body'>
                <div className='bodyExercises'>
                    <div className='backgroundLinks2'>
                        <Link className="link2" to="">EDITAR PERFIL</Link>
                        <Link className="link2" to="delete ">ELIMINAR PERFIL</Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Users;