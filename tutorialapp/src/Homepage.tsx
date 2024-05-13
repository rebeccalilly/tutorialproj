import './Homepage.css';
import Menu from './Menu.tsx';
import Title from './Title.tsx';

function Homepage() {
    return (
        <div className="homepage">
            <div className="homepage__menu">
                <Menu />
            </div>
            <div className="homepage__title">
                <Title />
            </div>
        </div>
    )
}

export default Homepage;