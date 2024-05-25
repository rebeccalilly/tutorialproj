import './Menu.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link from React Router

function Menu() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="menu">
            <button className='menuIcon' onClick={() => setShowMenu(!showMenu)}><MenuIcon /></button>
            {showMenu &&
                <div id="menu__items">
                    <a className='menu__item'>React</a>
                    <a className='menu__item'>HTML</a>
                    <a className='menu__item'>CSS</a>
                    <a className='menu__item'>JavaScript</a>
                    <a className='menu__item'>git & GitHub</a>
                </div>}
        </div>
    )
}

export default Menu;
