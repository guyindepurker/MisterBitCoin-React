
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import { contactService } from '../../services/ContactService'
import ContactList from '../../cmps/ContactList/'
import ContactFilter from '../../cmps/ContactFilter/'
import { connect } from 'react-redux';
import {loadContacts,removeContact} from '../../store/actions/contactActions'
import './ContactPage.scss'

 class _ContactPage extends Component {
    state = {
        filterBy:null
    }
    componentDidMount() {
        this.loadContacts()
    }
    loadContacts=()=>{
        this.props.loadContacts(this.state.filterBy)
    }
     removeContact=async(id)=>{
       await this.props.removeContact(id)
       this.props.loadContacts(this.state.filterBy)
    }
    setFilter=(filterBy)=>{
        this.setState({filterBy},this.loadContacts)
    }
    render() {
        const { contacts } = this.props
        if (!contacts) return <div>Loading...</div>
        return (
            <section className="contact-page">
                <ContactFilter  setFilter={this.setFilter} />
                 <ContactList removeContact={this.removeContact} history={this.props.history} contacts={contacts} />
                 <Link   to="/contact/edit"><img className="img-icon add-new"  src="./icons/plus.png" alt="add new" /> </Link>
            </section>

        )
    }
}

function mapStateToProps(state) {
    return {
      contacts: state.contactReducer.contacts
    }
  }
  const mapDispatchToProps = {
    loadContacts,
    removeContact
  }
  export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)
