
import {Link} from 'react-router-dom'
import './ContactPreview.scss'
export default function ContactPreview({contact,removeContact,history}) {
    function goToEdit(ev,id){
        ev.preventDefault()
        console.log('id:', id)
        history.push(`/contact/edit/${id}`)
    }
    function remove(ev,id){
        ev.preventDefault()
        removeContact(id)
    }
    return (
        <Link to={`/contact/${contact._id}`} >
        <li className="contact-preview flex  align-center space-between">
            <div className="contact-container flex align-center">

            <img className="profile-img" src={`https://robohash.org/${contact._id}?set=set5`} alt="profile" />
            <h3>{contact.name}</h3>
            </div>
            <div className="btn-controls flex wrap">
            <img className="img-icon" src="./icons/edit.png" onClick={(ev)=>goToEdit(ev,contact._id)} />
            <img className="img-icon" src="./icons/delete.png" onClick={(ev)=>remove(ev,contact._id)} />
            </div>
        </li></Link>
    )
}
