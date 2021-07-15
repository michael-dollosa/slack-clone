import "../History/HeaderHistory.scss"
import  { GrClock } from 'react-icons/gr'

const History = () => {
    return (
        <div className="header-history">
            <button className="header-history-btn">
                <GrClock />
            </button>
        </div>
    )
}

export default History;