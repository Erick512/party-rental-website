import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faHome, faTent } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

 const Sidebar = () => {
    return (
    <div className='nav-bar'>
        <nav>
            <a href='#home' activeclassname='active'>
                <FontAwesomeIcon icon={faHome} color='white'/>
            </a>
            <a href='#about' activeclassname='active' className='about-link' >
                <FontAwesomeIcon icon={faUser} color='white'/>
            </a>
            <a href='#rentals' activeclassname='active' className='rentals-link' >
                <FontAwesomeIcon icon={faTent} color='white'/>
            </a>
            <a href='#contact' activeclassname='active' className='contact-link' >
                <FontAwesomeIcon icon={faEnvelope} color='white'/>
            </a>
            <a href='#cart' activeclassname='active' className='cart-link' >
                <FontAwesomeIcon icon={faCartShopping} color='white'/>
            </a>
        </nav>
    </div>
    )
 }

 export default Sidebar