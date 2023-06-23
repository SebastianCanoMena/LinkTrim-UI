import styles from "./Navbar.module.css"
import githubLogo from "./Nav-img/github.png"
import userLogo from "./Nav-img/user.png"
import homeLogo from "./Nav-img/home.png"
import { Link } from "react-router-dom"

export function Navbar(){
    return(
        <nav className="d-flex justify-content-between">
                <Link to="/"><img alt="" className="p-2" src={homeLogo} /></Link>
                <Link to="https://github.com/SebastianCanoMena/LinkTrim-UI"><img alt="" className="p-2"src={githubLogo} /></Link>
                <Link to="/login" ><img alt="" className="p-2" src={userLogo} /></Link>
        </nav>
    )
}