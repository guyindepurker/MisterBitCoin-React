
import React, { Component } from 'react'
import { contactService } from '../../services/ContactService'
import { connect } from 'react-redux';
import { addContact, updateContact, removeContact } from '../../store/actions/contactActions'
import './ContactEdit.scss'

class _ContactEdit extends Component {
    state = {
        contact: {
            name: '',
            phone: '',
            email: ''
        },
        errMsg: null
    }
    async componentDidMount() {
        const { id } = this.props.match.params
        const contact = id ? await contactService.getContactById(id) : await contactService.getEmptyContact();
        if (contact) this.setState({ contact })

    }
    removeContact = async (id) => {
        await this.props.removeContact(id)
        this.props.history.push('/contact')
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }
    saveContact = async (ev) => {
        ev.preventDefault()
        const { contact } = this.state
        if (!contact.name || !contact.email || !contact.phone) {
            return this.setState({ errMsg: 'Please fill up all the above fields' })
        }
        if (contact._id) await this.props.updateContact(contact)
        else await this.props.addContact({...contact})
        this.props.history.push('/contact')
    }

    render() {
        const { name, phone, email, _id } = this.state.contact
        return (<form className="contact-edit simple-form " onSubmit={this.saveContact}>
            {!_id&& <h1 className="title-editor">Add new contact</h1>
            || _id&&<h1 className="title-editor">Edit Details</h1>
            }
            {_id && <img src={`https://robohash.org/${_id}?set=set5`} className="img-profile" alt="profile" />}
            <label>Name:</label>
            <input autoFocus type="text" className="input input-editor" name="name" value={name} onChange={this.handleChange} />
            <label>Email:</label>
            <input type="email" className="input input-editor" name="email" value={email} onChange={this.handleChange} />
            <label>Phone:</label>
            <input type="tel" className="input input-editor" name="phone" value={phone} onChange={this.handleChange} />
            <span className="form-errors">{this.state.errMsg}</span>
            <button>Save</button>
            {_id &&
                <div className="action-container flex space-between">
                    <button type="remove" onClick={() => this.props.history.goBack()
                    }>Go Back</button>
                    <button type="delete" onClick={() => this.removeContact(_id)}>Delete</button>
                </div>
            }
        </form>
        )
    }
}
const mapDispatchToProps = {
    addContact,
    updateContact,
    removeContact
}
export const ContactEdit = connect(null, mapDispatchToProps)(_ContactEdit)
