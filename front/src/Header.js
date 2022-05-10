import { useState } from "react";
import { Link } from "react-router-dom"
import amate from './img/amate.png'
import { CgLogOff } from "react-icons/cg";
import { BiDumbbell } from "react-icons/bi";

function Header(props) {
  
  const [logOutDatas, setLogOutDatas] = useState('')

  if(localStorage.getItem("email")){
    
    props.setUserEmail(localStorage.getItem("email"))
  }

  function logOut() {

    fetch("http://localhost:3000/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/Json",
      },
      credentials: "include",
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then(function (datas) {
        props?.setUserEmail('')
        setLogOutDatas(datas);
        localStorage.removeItem("email")
        window.location.replace("http://localhost:3001")
      });
  }

  return (
    <>
      <div className="header" >
        <div className="backgroundLinks">
          <div className="positionDumbbels">
            <a className="dumbbell" ><BiDumbbell /></a>
          </div>
          <div className="links" >
            <Link className="link" to="/exercises">EJERCICIOS</Link>
            <Link className="link" to="/workout">RUTINAS</Link>
            <Link className="link" to="/stretch">ESTIRAMIENTOS</Link>
            <Link className="link" to="/user">USUARIO</Link>
          </div>
          <div className="positionButtonHeader">
            <a className="buttonHeader" onClick={() => logOut()}><CgLogOff /></a>
          </div>
        </div>
        <div className="img">
          <img src={amate} alt="" />
        </div>
      </div>

    </>
  )
}

export default Header