import styles from "./Navbar.module.css"
import githubLogo from "./Nav-img/github.png"
import userLogo from "./Nav-img/user.png"
import homeLogo from "./Nav-img/home.png"

export function Navbar(){
    return(
        <nav class="d-flex justify-content-between">
                <a href="index.html"><img alt="" class="p-2" src={homeLogo} /></a>
                <a href="https://github.com/SebastianCanoMena/LinkTrim-UI"><img alt="" class="p-2"src={githubLogo} /></a>
                <a href="login/index.html"><img alt="" class="p-2" src={userLogo} />
                </a>
        </nav>
    )
}