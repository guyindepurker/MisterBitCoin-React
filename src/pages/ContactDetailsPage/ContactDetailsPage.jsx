import {contactService} from '../../services/ContactService'
import React, { Component } from 'react'

import './ContactDetailsPage.scss'

export class ContactDetailsPage extends Component {
    state={
        contact:null
    }
   async componentDidMount(){
        const contact = await contactService.getContactById(this.props.match.params.id) 
        this.setState({contact})
    }
    render() {
        const {contact} = this.state;
        if(!contact) return <div>loading......</div>
        return(
            <section className="contact-details flex column align-center justify-center">
             <h2>{contact.name} </h2>  
            <h3>{contact.phone}</h3>
            <h3>{contact.email}</h3>
            <button onClick={()=>this.props.history.goBack()}>Go Back</button>
            <button onClick={()=>this.props.history.push(`/contact/edit/${contact._id}`)}>Edit</button>
            </section>
            )
    }
}


