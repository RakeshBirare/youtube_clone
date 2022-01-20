import React, { useState } from "react";
import "./_Header.scss";
import { FaBars } from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useNavigate } from "react-router-dom";




const Header = ({handleToggler}) => {

    const [input, setInput] = useState("")

    const navigate = useNavigate()
    const handelSubmit = e => {
        e.preventDefault()
        navigate(`search/${input}`)
    }

    //const {photoURL} = useSelector(state => state.auth?.user)



    return (
        <div className=" header">
            <FaBars className="header__menu" size={22} 
            onClick={() => handleToggler()} />
            <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="YoutubeLogo" className="header__logo" />
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder="search" value={input} onChange={e => setInput(e.target.value)} />
                <button type="submit"><AiOutlineSearch size="22" /></button>
            </form>
            <div className="header__icons">
                <MdNotifications size="28" />
                <MdApps size="28" />
                <img src="https://www.freepnglogos.com/uploads/minions-png/minion-imagens-png-minions-pinterest-minion-9.png" alt="Avatar" />
            </div>
        </div>
    )
}

export default Header;