
import moment from 'moment'
import './MovePreview.scss'

export default function MovePreview({move}) {
    function getTime(){
        return moment(move.at).format('MMMM D YYYY, h:mm:ss')
    }
    function getAmount(){
        return move.amount + ' coins'
    }
    return (
        <li className="move-preview">
           <h4><span className="bolder">To:</span>{move.to}</h4> 
           <h4><span className="bolder">At:</span>{getTime()}</h4> 
           <h4><span className="bolder">Amount:</span>{getAmount()}</h4> 
        </li>
    )
}

