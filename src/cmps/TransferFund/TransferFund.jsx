
import React, { Component } from 'react'

import './TransferFund.scss'

class TransferFund extends Component {
    state = {
        amount: 0,
        errMsg: null
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = +target.value
        this.setState({ [field]: value })
    }
    transferCoins = (ev) => {
        ev.preventDefault()
        const { amount } = this.state
        const { maxCoins } = this.props
        if (amount === 0 || amount > maxCoins) return this.setState({ errMsg: 'Cant transfer 0' })
        this.props.onTransferCoins(amount)
    }
    render() {
        const { contact, maxCoins } = this.props
        const {amount,errMsg} = this.state 
        return (
            <form className="transfer-fund" onSubmit={this.transferCoins}>
                <h3 className="title">Transfer coins to {contact.name}</h3>
                <span className="left-amount">Your left coins: {maxCoins}</span>
               <div className="transfer-container flex space-between align-center">
                <label htmlFor="transfer">Amount <span className="amount-transfar">{amount}</span></label>
                <input type="range" id="transfer" name="amount" value={amount} onChange={this.handleChange} min="0" max={maxCoins} />
                <span className="form-errors">{errMsg}</span>
                <button className="trade">Transfer</button>
               </div>
            </form>
        )
    }
}

export default TransferFund
