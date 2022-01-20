import React from "react";
import "./_Sidebar.scss";
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,

} from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth.action";
import { Link } from "react-router-dom";
import { AiOutlineCompass } from "react-icons/ai";

const Sidebar = ({toggler, handleToggler}) => {

    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout())
    }


    return (
        <nav className={toggler ? "sidebar open" : "sidebar"}
        onClick={() => handleToggler(false)}>
            
            
            
           <Link to="/" >
            <li>
                <MdHome size={23}/>
                <span>Home</span>
            </li></Link>
            <li>
                <MdSubscriptions size={23}/>
                <span>Subscription</span>
            </li>
            <li>
                <MdThumbUp size={23}/>
                <span>Liked Videos</span>
            </li>
            <li>
                <MdHistory size={23}/>
                <span>History</span>
            </li>
            <li>
                <MdLibraryBooks size={23}/>
                <span>Library</span>
            </li>
            <li>
                <AiOutlineCompass size={23}/>
                <span>Explore</span>
            </li>
            <li onClick={logoutHandler}>
                <MdExitToApp size={23}/>
                <span>Log Out</span>
            </li>
            <hr />
        </nav>
    )
}

export default Sidebar; 