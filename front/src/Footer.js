import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
    const handleClick = (url) => {
        window.open(url);
      };
      const facebook = "https://es-es.facebook.com/"
      const twitter = "https://twitter.com/"
      const instagram = "https://www.instagram.com/?hl=es"
      const linkedin = "https://www.linkedin.com/in/cristian-vera-hernandez-desarrollador/"
    return (
        <div className="backgroundFooter">
            <div className="divImg">
                <img src="https://tse3.mm.bing.net/th?id=OIP.MZMxRPx3EQdaf7w_1c273gHaBi&pid=Api&P=0&w=491&h=102" alt="" />
            </div>
            <div className="contactos">
                <div className="siguenos">
                    <p>Siguenos en:</p>
                    <button className="buttonGeneral" onClick={()=>handleClick(facebook)}>{<BsFacebook className="fcb" />}</button>
                    <button className="buttonGeneral" onClick={()=>handleClick(instagram)}><AiFillInstagram className="inst" /></button>
                    <button className="buttonGeneral" onClick={()=>handleClick(twitter)}><FaTwitter className="twtr" /></button>
                </div>
                <div className="diseñador">
                    <p>Diseñado por:</p>
                    <button className="buttonGeneral" onClick={()=>handleClick(linkedin)}><FaLinkedin className="linkedin" /></button>
                </div>
            </div>
        </div>
    )
}

export default Footer