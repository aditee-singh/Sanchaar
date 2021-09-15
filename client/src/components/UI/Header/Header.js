import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faQuestionCircle,
    faExclamationCircle,
    faCog
} from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://www.gstatic.com/meet/google_meet_primary_horizontal_2020q4_logo_be3f8c43950bd1e313525ada2ce0df44.svg" />
            </div>
            <div className="action-btn">
                <FontAwesomeIcon className="icon-block" icon={faQuestionCircle}/>
                <FontAwesomeIcon className="icon-block" icon={faExclamationCircle}/>
                <FontAwesomeIcon className="icon-block" icon={faCog}/>
            </div>
        </div>
    )
}

export default Header;