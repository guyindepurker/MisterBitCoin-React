

import './MovePreview.scss'

export default function MovePreview({move}) {
    function getTime(){
        return new Date(move.at).toLocaleDateString()
    }
    function getAmount(){
        return move.amount + ' coins'
    }
    return (
        <li className="move-preview">
           <h4>To:{move.to}</h4> 
           <h4>At:{getTime()}</h4> 
           <h4>Amount:{getAmount()}</h4> 
        </li>
    )
}

