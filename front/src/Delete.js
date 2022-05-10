import { useState, useEffect } from 'react'
import './css/Delete.css'

function Delete() {
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    get()
  }, [])

  function get() {
    let localEmail = localStorage.getItem("email")
    fetch("http://localhost:3000/users/getData/" + localEmail)
      .then((res) => res.json())
      .then(function (datas) {
        debugger
        setEmail(datas?.email)
        setFeedback(datas?.content?.message)
      });
  }

  function deleteUser(email, feedback) {
    fetch("http://localhost:3000/users", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/Json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        feedback
      }),
    })
      .then((res) => res.json())
      .then(function (datas) {
        setFeedback(datas?.content?.message)
      });
  }
  return (
    <div className='bodyDelete' >
      <div className='cardDelete'>
      <p className='textEdit'>Email de usuario: <input className='inputExclusive' value="" type="email" name="" id="" placeholder={email}/></p>
        <p className='textDelete'>¿Seguro que quieres eliminar tu perfil?</p>
        <button className="buttonGeneral" onClick={() => deleteUser(email, feedback)}>Eliminar</button>
        <p className='feedback'>{feedback}</p>
      </div>

    </div>
  )
}

export default Delete