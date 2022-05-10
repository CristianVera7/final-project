import { useState, useEffect } from 'react'
import './css/Edit.css'

function Edit() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [subname, setSubname] = useState('')
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    get()
  }, [])

  function get() {
    let localEmail = localStorage.getItem("email")
    fetch("http://localhost:3000/users/getData/" + localEmail)
      .then((res) => res.json())
      .then(function (datas) {
        const email = setEmail(datas?.email)
        setName(datas?.name)
        setSubname(datas?.subname)
        setPassword(datas?.password)
        setFeedback(datas?.content?.message)
      });
  }

  function editUser(email, password, name, subname, feedback) {
    fetch("http://localhost:3000/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/Json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
        name,
        subname,
        feedback
      }),
    })
      .then((res) => res.json())
      .then(function (datas) {
        setFeedback(datas?.content?.message)
      });
  }
  return (
    <div className='bodyEdit' >
      <div className='cardEdit'>
        <p className='textEdit'>Email de usuario: <input className='inputExclusive' value="" type="email" name="" id="" placeholder={email}/></p>
        <p className='textEdit'>Nombre: <input className='inputExclusive' value={name} onChange={(e) => setName(e.target.value)} type="text" name="" id="" placeholder='Modificar nombre'/></p>
        <p className='textEdit'>Apellidos: <input className='inputExclusive' value={subname} onChange={(e) => setSubname(e.target.value)} type="text" name="" id="" placeholder='Modificar Apellidos' /></p>
        <p className='textEdit'>Contraseña: <input className='inputExclusive' value={password} type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}placeholder='Modificar contraseña' /></p>
        <button className="buttonGeneral" onClick={() => editUser(email, password, name, subname, feedback)}>Editar</button>
        <p className='feedback'>{feedback}</p>
      </div>

    </div>
  )
}

export default Edit