
import { Component } from 'react'

import './Signup.scss'
import { signup } from '../../store/actions/userActions';
import { connect } from 'react-redux';

class _Signup extends Component {
    state = {
        name: '',
        errMsg: null
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState({ [field]: value })
    }
    doSignup = async (ev) => {
        ev.preventDefault()
        const { name } = this.state
        if (!name) return this.setState({ errMsg: 'Please fill the name' })
        this.props.signup(name)
        this.props.history.push('/')
    }
    render() {
        const { name, errMsg } = this.state
        return (
            <section className="signup-page">
                <form className="simple-form" onSubmit={this.doSignup}>
                    <label htmlFor="name">Please enter your name:</label>
                    <input type="text" name="name" value={name} onChange={ this.handleChange} />
                    <span className="form-errors">{errMsg}</span>
                    <button>Signup</button>
                </form>
            </section>
        )
    }
}

const mapDispatchToProps = {
    signup
}
export const Signup = connect(null, mapDispatchToProps)(_Signup)

