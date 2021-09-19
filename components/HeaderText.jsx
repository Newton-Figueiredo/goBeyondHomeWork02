import { FaTelegramPlane,FaLinkedin } from "react-icons/fa";
import { FiGithub , FiInstagram } from "react-icons/fi";

export default function HeaderText() {
    return (

        <div className="headerText">
            <div className="headerNome">
                <h1 className="headerNome">
                    Newton Carvalho
                </h1>
            </div>

            <div className="headerTitulo">
                <p className="headerTitulo">
                    Front-End Developer
                </p>
            </div>

            <div className="headerLinks">
                <a className="B01" href="https://t.me/newcarvalho"> <FaTelegramPlane size='2rem'/> </a>
                <a className="B02" href="https://github.com/newcarvalho"> <FiGithub size='2rem'/> </a>
                <a className="B03" href="https://www.linkedin.com/in/newton-carvalho-137958180/"> <FaLinkedin size='2rem'/> </a>
                <a className="B04" href="https://www.instagram.com/newton.rar/"> <FiInstagram size='2rem'/> </a>
                
            </div>
           
        </div>
    )
}

