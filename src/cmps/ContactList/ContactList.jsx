
import ContactPreview from '../ContactPreview/'
import './ContactList.scss'


export default function ContactList({contacts,loadContact}) {
    return (
        <ul className="contact-list clean-list flex align-center wrap space-around">
            {contacts.map(contact=>{
                return <ContactPreview loadContact={loadContact} key={contact._id} contact={contact} />
            })}
        </ul>
    )
}
