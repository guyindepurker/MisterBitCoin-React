
import ContactPreview from '../ContactPreview/'
import './ContactList.scss'


export default function ContactList({contacts,history,removeContact}) {
    
    return (
        <ul className="contact-list clean-list flex column align-center wrap space-around">
            {contacts.map(contact=>{
                return( <ContactPreview removeContact={removeContact} history={history} key={contact._id} contact={contact} /> )
            })}
        </ul>
    )
}
