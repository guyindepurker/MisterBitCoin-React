
import React, { Component } from 'react'
import { contactService } from '../../services/ContactService'
import ContactList from '../../cmps/ContactList/'
import ContactDetailsPage from '../ContactDetailsPage/'
import ContactFilter from '../../cmps/ContactFilter/'
import './ContactPage.scss'

class ContactPage extends Component {
    state = {
        contacts: null,
        currContact: null,
        contactId:null,
        filterBy:null
    }
    componentDidMount() {
        this.loadContacts()
    }
    async loadContacts() {
        const contacts = await contactService.getContacts(this.state.filterBy)
        this.setState({ contacts }, () => {
            console.log('contacts:', contacts)
        })
    }
      onSelectContactId=(contactId)=>{
        this.setState({contactId})
    }
    setFilter=(filterBy)=>{
        this.setState({filterBy},this.loadContacts)
    }
    render() {
        const { contacts ,contactId} = this.state
        if (!contacts) return <div>Loading...</div>
        return (
            <section className="contact-page">
                <ContactFilter setFilter={this.setFilter} />
                {!contactId && <ContactList loadContact={this.onSelectContactId} contacts={contacts} />}
                {contactId && <ContactDetailsPage goBack={()=>this.onSelectContactId(null)} contactId={contactId} />}
            </section>

        )
    }
}

export default ContactPage
