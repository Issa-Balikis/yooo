import reactlogo from '../images/reactlogo.png';

const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <img src={reactlogo}
            alt="react logo"
            className="nav-icon" />
            <h3 className="nl-text">React facts</h3>
            <h4 className='nl-title'>React course - project 1</h4>
        </nav>
    );
}
 
export default Navbar;