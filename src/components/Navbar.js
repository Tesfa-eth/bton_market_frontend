import {Link, useMatch, useResolvedPath} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='nav'>
        <Link to='/' className='site-title'>Bton Market</Link>
        <ul>
            <CustomLink to='/categories'>Categories</CustomLink>
            <CustomLink to='/profile'>Profile</CustomLink>
        </ul>
        </nav>
    )
}

function CustomLink({to,children, ...props}){
    const resolvedPath = useResolvedPath(to)
    //end: true aboslute maching enabled
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default Navbar
