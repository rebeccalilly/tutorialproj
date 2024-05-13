import './Menu.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="menu">
            <button className='menuIcon' onClick={() => showMenu === false ? setShowMenu(true) : setShowMenu(false)}><MenuIcon /></button>
            {showMenu === true ?
                <div id="menu__items">
                    <a className='menu__item'>HTML</a>
                    <a className='menu__item'>CSS</a>
                    <a className='menu__item'>JavaScript</a>
                    <a className='menu__item'>git & GitHub</a>
                    <a className='menu__item'>React</a>
                </div> :
                <div></div>}
        </div>
    )
}

export default Menu;