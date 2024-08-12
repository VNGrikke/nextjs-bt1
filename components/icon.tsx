import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCamera, faEye, faCircle } from '@fortawesome/free-solid-svg-icons'

export default function icon() {
    return (
        <div>
            <h2>Danh sách các Icon</h2>
            <FontAwesomeIcon icon={faCoffee} size="2x" />
            <FontAwesomeIcon icon={faCamera} size="2x" />
            <FontAwesomeIcon icon={faEye} size="2x" />
        </div>
    )
}
