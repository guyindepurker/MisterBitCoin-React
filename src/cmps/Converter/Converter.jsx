
import React, { Component } from 'react'

import './Converter.scss'
import { bitcoinService } from '../../services/BitcoinService';

class Converter extends Component {
    state={
        res:null,
        money:'',
        rate:null
    }
   async componentDidMount(){
        const rate = await bitcoinService.getRate()
        console.log('rate:', rate)
        this.setState({rate})
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = +target.value
        console.log('value:', value)
        this.setState({ [field]: value } )

    }
    convertMoney=()=>{
        const {money,rate} = this.state
        const res = money*rate
        console.log('res:', res)
        this.setState({res})
    }
    render() {
        const {res,money,rate} = this.state
        return (<div className="converter-main flex column space-around">
            <div className="converter flex space-around">

            <input  type="number" className="input" value={money} onChange={this.handleChange} name="money" placeholder="Enter a money in Dollars" />
            <input className="input" type="text" disabled placeholder="USD"/>
            <button onClick={this.convertMoney}>Buy BTC</button>

            </div>
            {res&&<div className="res-container">
                <h2>BTC Rate: {rate} Your Bitcoin Money: {res}</h2>
                </div>}
        </div>)
    }
}

export default Converter
