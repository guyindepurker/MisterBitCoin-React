
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { contactService } from '../../services/ContactService'
import ContactList from '../../cmps/ContactList/'
import ContactFilter from '../../cmps/ContactFilter/'
import './ContactPage.scss'

export class ContactPage extends Component {
    state = {
        contacts: null,
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
     removeContact=async(id)=>{
        await contactService.deleteContact(id)
        this.loadContacts()
        console.log('Delete Success');
    }
    setFilter=(filterBy)=>{
        this.setState({filterBy},this.loadContacts)
    }
    render() {
        const { contacts } = this.state
        if (!contacts) return <div>Loading...</div>
        return (
            <section className="contact-page">
                <ContactFilter setFilter={this.setFilter} />
                 <ContactList removeContact={this.removeContact} history={this.props.history} contacts={contacts} />
                 <Link   to="/contact/edit">Add New Contact + </Link>
            
            </section>

        )
    }
}


