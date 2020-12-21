import {contactService} from '../../services/ContactService'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addMove} from '../../store/actions/userActions'
import './ContactDetailsPage.scss'
import TransferFund from '../../cmps/TransferFund/TransferFund';
import MoveList from '../../cmps/MoveList/MoveList';

 class _ContactDetailsPage extends Component {
    state={
        contact:null
    }
   async componentDidMount(){
        const contact = await contactService.getContactById(this.props.match.params.id) 
        this.setState({contact})
    }
     onTransferCoins=(amount)=>{
         const {contact} = this.state
         this.props.addMove(contact,amount)    
    }
    render() {
        const {contact} = this.state;
        const {user} = this.props
        if(!contact) return <div>loading......</div>
        return(
            <section className="contact-details flex column align-center justify-center">
             <h2>{contact.name} </h2>  
            <h3>{contact.phone}</h3>
            <h3>{contact.email}</h3>
            <div className="btn-controls flex">

            <img onClick={()=>this.props.history.goBack()} className="img-icon" src="./icons/back.png" />
            <img onClick={()=>this.props.history.push(`/contact/edit/${contact._id}`)} className="img-icon" src="./icons/edit.png" />
            </div>
            {user&&<div className="contact-options">
            <TransferFund contact={contact} maxCoins={user.coins} onTransferCoins={this.onTransferCoins} />
            <MoveList title="Your Moves:" movesList={user.moves} />
            </div>}
            </section>
            )
    }
}

function mapStateToProps(state) {
    return {
      user: state.userReducer.currUser
    }
  }
const mapDispatchToProps = {
    addMove,
   
  }
 

  export const ContactDetailsPage = connect(mapStateToProps, mapDispatchToProps)(_ContactDetailsPage)
