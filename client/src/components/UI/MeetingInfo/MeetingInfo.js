import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faTimes,
  faUser,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import './MeetingInfo.scss'

const MeetingInfo = ({setMeetingInfoPopup, url}) => {
  return (
    <div className="meeting-info-block">
      <div className="meeting-info">
        <h3>Your meeting's ready</h3>
        <FontAwesomeIcon className="icon" icon={faTimes} onClick={() => {
          setMeetingInfoPopup(false);
        }}/>
      </div>
      <button className="add-people-btn">
        <FontAwesomeIcon className="icon" icon={faUser} />
        Add Others
      </button>
      <p className="info-text">Some text that is relate to ths prject</p>
      <div className="meet-link">
        <span>{url}</span>
        <FontAwesomeIcon icon={faCopy} className="icon" onClick={() => {
          navigator.clipboard.writeText(url);
        }}/>
      </div>
      <div className="permission-text">
        <FontAwesomeIcon icon={faShieldAlt} className="icon" />
        <p className="small-text">
          People will need your permission to join this call
        </p>
      </div>
      <p className="small-text">Joined as singhaditee33</p>
    </div>
  );
};
export default MeetingInfo;
