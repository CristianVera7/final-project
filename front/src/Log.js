import { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/Log.css'


function Log() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [subname, setSubname] = useState('')
  const [feedback, setFeedback] = useState('')

  function signIn(email, password, name, subname) {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/Json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
        name,
        subname
      }),
    })
      .then((res) => res.json())
      .then(function (datas) {
        console.log(datas);
        setFeedback(datas?.content?.message)
      });
  }
  return (
    <div className='bodyLog' >
      <div className='cardLog'>
        <p className='textLog'>Nombre: <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="" id="" placeholder='Nombre' /></p>
        <p className='textLog'>Apellidos: <input value={subname} onChange={(e) => setSubname(e.target.value)} type="text" name="" id="" placeholder='Apellidos' /></p>
        <p className='textLog'>Usuario: <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="" id="" placeholder='Registro con email' /></p>
        <p className='textLog'>Contraseña: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Introduzca contraseña'/></p>
        <button className="buttonGeneral" onClick={() => signIn(email, password, name, subname, feedback)}>Registrar</button>
        <p><Link className='linkLog' to="/">Ya estoy registrado</Link></p>
        <p className='feedback'>{feedback}</p>
      </div>

    </div>
  )
}

export default Log