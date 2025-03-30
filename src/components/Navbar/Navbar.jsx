// import { primaryMenuItems } from '@constants'
import cn from 'classnames'
import { Link } from 'react-router-dom'
/* import NavLink from './NavLink'
import AccountLink from './AccountLink' */
import ThemeToggle from '@components/ThemeToggle'
// import Dropdown from '@components/Dropdown'

// @todo
const drawerEnabled = false

const Navbar = () => {
    
    return (
        
        <nav className="z-10 flex items-center content-center w-full px-3 mx-auto Navbar max-w-screen-2xl">
            
            <div className="flex items-center content-center flex-grow h-full">
                <Link
                    className={cn(
                        'px-1 py-1 my-2 mr-3 font-bold transition-opacity',
                        'duration-500 ease-in-out branding opacity-60 hover:opacity-100',
                    )}
                    to="/">
                    {/* eslint-disable-next-line no-restricted-globals */}
                    {document.title?.toUpperCase() ?? ''}
                </Link>
            </div>
            
            <div className="flex items-center content-center">
                
                {/* {primaryMenuItems.map(({ label, to }) => (
                    <NavLink key={to} to={to}>{label}</NavLink>
                ))}
                
                {drawerEnabled ? <AccountLink /> : (
                    <Dropdown
                        className="dropdown-end"
                        trigger={<AccountLink onClick={e => e.preventDefault()} />}
                        items={[
                            ...primaryMenuItems.map(({ label, to }) => (
                                <Link key={to} to={to}>{label}</Link>
                            )),
                            <Link to="/signout">SIGN OUT</Link>,
                        ]} />
                )} */}
                
                {!drawerEnabled && <ThemeToggle />}
            
            </div>
        
        </nav>
        
    )
    
}

export default Navbar
