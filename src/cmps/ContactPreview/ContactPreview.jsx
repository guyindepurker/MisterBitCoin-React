
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
        <li className="contactPreview flex column align-center">
            <img src={`https://robohash.org/${contact._id}`} alt="profile" />
            <h3>{contact.name}</h3>
            <h4>{contact.email}</h4>
            <h4>{contact.phone}</h4>
            <button onClick={(ev)=>goToEdit(ev,contact._id)}>Edit</button>
            <button onClick={(ev)=>remove(ev,contact._id)}>Delete</button>
        </li></Link>
    )
}
