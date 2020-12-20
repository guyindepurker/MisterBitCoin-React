import { NavLink, Route } from 'react-router-dom'

import React, { Component } from 'react'
import Chart from '../../cmps/Chart/'
import { bitcoinService } from '../../services/BitcoinService'
import './StaticPage.scss'

export class StaticPage extends Component {
    state = {
        marketPrice: null,
        avgBlock: null,
        trance: null
    }
    componentDidMount() {
        this.loadMarketPrice()
        this.loadAvgBlock()
        this.loadTrance()
    }
    //load the state functions:
    loadMarketPrice = async () => {
        const marketPrices = await bitcoinService.getMarketPrice()
        const marketPricesFiltered = marketPrices.values.map(value => value.y).splice(0, 10)
        this.setState({ marketPrice: marketPricesFiltered })
    }
    loadAvgBlock = async () => {
        const avg = await bitcoinService.getAvgBlock()
        const avgFiltered = avg.values.map(value => Math.floor(value.x / 10000)).splice(0, 10)
        this.setState({ avgBlock: avgFiltered})
    }
    loadTrance = async () => {
        const trance = await bitcoinService.getConfirmedTransactions()
        const tranceFilter = trance.values.map(value => Math.floor(value.x / 100000)).splice(0, 10)
        this.setState({ trance: tranceFilter })
    }
    render() {
        const { marketPrice, avgBlock, trance } = this.state
        const MarketChart = () =>{
            return (<div>
            
                <Chart data={marketPrice} /></div>)
        }
        const AvgChart = () => {
           return (<div><Chart data={avgBlock} /></div>)
        }
        const TranceChart = () =>{
            return (<div><Chart data={trance} /></div>)
        }
        if (!marketPrice && !avgBlock && !trance) return <div>loading..</div>
        return (
            <section className="static-page">
                <h2>Static Page </h2>
                <nav className="btn-controls">
                    <NavLink to="/static">Market</NavLink>
                    <NavLink to="/static/trance">Trance</NavLink>
                    <NavLink to="/static/avg">Avg Block</NavLink>
                </nav>
            
                <Route exact path="/static" component={ MarketChart } />
            <Route path="/static/trance" component={ TranceChart } />
            <Route path="/static/avg" component={ AvgChart } />
            </section>
        )
    }
}

