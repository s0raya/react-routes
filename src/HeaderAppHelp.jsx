import { Link, Outlet } from 'react-router-dom'

function HeaderHelp() {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/resume'>Resume</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/help'>Help</Link>
                <Link to='/help/faqs'>Faqs</Link>
            </nav>
            <Outlet />
        </>
    )

}

export default HeaderHelp