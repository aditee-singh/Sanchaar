import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import shortid from "shortid";
import './HomePage.scss';
import Header from '../UI/Header/Header';
import '../../App.scss';

const HomePage = () => {
    const history = useHistory();

    const startCall = () => {
        const uid = shortid.generate();
        history.push(`${uid}#init`);
    }
    return (
        <div className="home-page">
            <Header />
            <div className="body">
                <div className="left-side">
                    <div className="content">
                        <h2>Premium video calls. Now free for everyone.</h2>
                        <p>One of it's kind videcalling app built with peer.js</p>
                        <div className="action-btn">
                            <button className="btn green" onClick={startCall}>
                                <FontAwesomeIcon className="icon-block" icon={faVideo}/>
                                New Meeting
                            </button>
                            <div className="input-block">
                                <div className="input-section">
                                    <FontAwesomeIcon className="icon-block" icon={faKeyboard}/>
                                    <input placeholder="Enter a code or link" />
                                </div>
                                <button className="btn no-bg"></button>
                            </div>
                        </div>
                    </div>
                    <div className="help-text">
                        <a href="/">Learn More</a> about Sanchaar
                    </div>
                </div>
                <div className="right-side">
                    <div className="content">
                        <img src="https://www.gstatic.com/meet/user_edu_brady_bunch_light_81fa864771e5c1dd6c75abe020c61345.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;