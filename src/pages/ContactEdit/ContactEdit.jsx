
import React, { Component } from 'react'
import { contactService } from '../../services/ContactService'
import './ContactEdit.scss'

export class ContactEdit extends Component {
    state = {
        contact: {
            name: '',
            phone: '',
            email: ''
        }
    }
    async componentDidMount() {
        const { id } = this.props.match.params
        const contact = id ? await contactService.getContactById(id) : await contactService.getEmptyContact();
        if (contact) this.setState({ contact })

    }
    removeContact = async (id) => {
        await contactService.getContactById(id)
        this.props.history.push('/contact')
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }
    saveContact = async (ev) => {
        ev.preventDefault()
        await contactService.saveContact({ ...this.state.contact })
        this.props.history.push('/contact')
    }

    render() {
        const { name, phone, email, _id } = this.state.contact
        return (<form className="contact-edit flex column align-center" onSubmit={this.saveContact}>
            {_id && <img src={`https://robohash.org/${_id}`} className="img-profile" alt="profile" />}
            <label>Name</label>
            <input autoFocus type="text" name="name" value={name} onChange={this.handleChange} />
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={this.handleChange} />
            <label>Phone</label>
            <input type="tel" name="phone" value={phone} onChange={this.handleChange} />
            <button>Save</button>
            {_id &&
                <>
                    <button type="remove" onClick={() => this.props.history.goBack()
                    }>Go Back</button>
                    <button type="delete" onClick={()=>this.removeContact(_id)}>Delete</button>
                </>
            }
        </form>
        )
    }
}

