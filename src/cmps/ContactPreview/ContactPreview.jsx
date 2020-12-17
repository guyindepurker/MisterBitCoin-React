

import './ContactPreview.scss'
export default function ContactPreview({contact,loadContact}) {
    return (
        <li className="contactPreview flex column align-center">
            <img src={`https://robohash.org/${contact._id}`} alt="Picture" />
            <h3>{contact.name}</h3>
            <h4>{contact.email}</h4>
            <h4>{contact.phone}</h4>
            <button onClick={()=>loadContact(contact._id)}>More ABout me</button>
        </li>
    )
}
