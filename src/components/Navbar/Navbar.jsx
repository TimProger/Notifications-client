import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Chat">
            <p>Navbar</p>
            <NavLink to={'/'}>Чат</NavLink>
        </div>
    );
}

export default Navbar;
