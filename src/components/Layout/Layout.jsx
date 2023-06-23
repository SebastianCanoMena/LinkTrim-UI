import {Navbar} from './Navbar/index'

export default function Layout(props){

    return(
        <>
            <Navbar/>
            <div>
                {props.children}
            </div>
        </>
    )
}