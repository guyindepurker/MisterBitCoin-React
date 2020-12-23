
import { Component } from 'react'
import './Signup.scss'
import { signup } from '../../store/actions/userActions';
import { connect } from 'react-redux';
import Converter from '../../cmps/Converter/Converter';

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
        const ConvertMoney = () => {
            return (<div className="convert-money flex column align-center">
                <h1>Already have a wallet? Buy Bitcoin instantly
                                                                    </h1>
                <h3>Buy both Bitcoin Cash (BCH) and Bitcoin (BTC) now using a credit or debit card.
                                                                                                </h3>
                <div className="convert-money-form flex space-between">
                    <Converter />

                </div>
            </div>)
        }
        const HeroSection = (props) => {
            return (<div className="hero-section ">
                <div className="hero-section-main container flex align-center justify-center">
                    <div className="container-contact-hero  flex align-center column justify-center">
                        <h1 className="title-hero">Move to the feature</h1>
                        <p>Bitcoin is an innovative payment network and a new kind of money.</p>
                    </div>
                    <img className="hero-pic" src="./icons/invest.svg" alt="svg img"  />
                    <img className="hero-pic bottom-img" src="./icons/invest2.svg" alt="svg img"  />
                </div>
            </div>

            )
        }
        return (
            <section className="signup-page">
                <HeroSection />
                <div className="signup-form">
                    <h2>Sign up Or Login to manage your Bitcoin</h2>
                    <form className="simple-form flex align-center" onSubmit={this.doSignup}>
                        <input type="text" name="name" className="input" placeholder="Please enter your name" value={name} onChange={this.handleChange} />
                        <span className="form-errors">{errMsg}</span>
                        <button>Signup</button>
                    </form>
                </div>
                <ConvertMoney />
            </section>
        )
    }
}

const mapDispatchToProps = {
    signup
}
export const Signup = connect(null, mapDispatchToProps)(_Signup)

