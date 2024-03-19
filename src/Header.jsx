import { Link, Outlet } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/resume'>Resume</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/help'>Help</Link>
                <Link to='/useeffect'>Useeffect</Link>
            </nav>
            <Outlet />
        </>
    )

}

export default Header