import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';

const buttonStyle = {
    position: 'absolute',
    right: '5px',
    top: '8px',
    background: 'transparent',
    cursor: 'pointer',
    border: 'none',
};

const handleClose = () => {
    console.log('Close button has been clicked');
}

function Notifications() {
    return (
        <div className="Notifications">
            <button
                style={buttonStyle}
                onClick={handleClose}
                aria-label="Close"
            >
                <img src={closeIcon} alt="close icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li
                    data-priority="urgent"
                    dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
                ></li>
            </ul>
        </div>
    )
}

export default Notifications