import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './css/Users.css'

function Home(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [feedback, setFeedback] = useState('')
    let navigate = useNavigate();
    function logIn(email, password, feedback) {
        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/Json",
          },
          credentials: "include",
          body: JSON.stringify({
            email,
            password,
            feedback
          }),
        })
          .then((res) => res.json())
          .then(function (datas) {
              props.setUserDatas(datas?.user);
              props.setUserEmail(datas?.user?.email);
              setFeedback(datas?.message)
              localStorage.setItem("email",datas?.user?.email)
              datas?.user && navigate('/exercises')
          });
      }

   
      
     
    return (
        <div className='bodyUsers' >
            {}
            {!props?.userEmail && <div className='cardUsers'>
                <p className='textUsers'>Usuario: <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" name="" id="" placeholder='Introduzca su email' /></p>
                <p className='textUsers'>Contraseña: <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" name="" id="" placeholder='Introduzca su contraseña' /></p>
                <button className="buttonGeneral" onClick={()=> logIn(email, password) /* useNavigate("/exercises") */}> Entrar </button>
                <p><Link className='linkLog' to="/log">¿No te has registrado?</Link></p>
                <p className='feedback'>{feedback}</p>
            </div>}
        </div>
    )
}

export default Home