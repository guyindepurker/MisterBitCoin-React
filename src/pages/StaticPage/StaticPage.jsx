import { NavLink, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import { bitcoinService } from '../../services/BitcoinService'
import './StaticPage.scss'
import ApexChart from '../../cmps/ApexChart/ApexChart';

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
        const data = await bitcoinService.getMarketPrice()
       data.values.slice(0,10)
        const marketPrice = {
            xaxis: data.values.map(value => value.x),
            yaxis: data.values.map(value => value.y)
        }
        this.setState({ marketPrice })
    }
    loadAvgBlock = async () => {
        const data = await bitcoinService.getAvgBlock()
       data.values.slice(0,10)
        const avgBlock = {
            xaxis: data.values.map(value => value.x),
            yaxis: data.values.map(value => value.y)
        }
        this.setState({ avgBlock })
    }
    loadTrance = async () => {
        const data = await bitcoinService.getConfirmedTransactions()
        data.values.slice(0,10)
        const trance = {
            xaxis: data.values.map(value => value.x),
            yaxis: data.values.map(value => value.y)
        }
        this.setState({ trance })
    }
    render() {
        const { marketPrice, avgBlock, trance } = this.state
        const MarketChart = () => {
            return ( <ApexChart {...marketPrice} />)
        }
        const AvgChart = () => {
            return (<ApexChart {...avgBlock} />)
        }
        const TranceChart = () => {
            return (<ApexChart {...trance} />)
        }
        if (!marketPrice && !avgBlock && !trance) return <div>loading..</div>
        return (
            <section className="static-page">
                <nav className="nav-static flex justify-center">
                    <NavLink exact to="/static">Market</NavLink>
                    <NavLink to="/static/trance">Trance</NavLink>
                    <NavLink to="/static/avg">Avg Block</NavLink>
                </nav>
                <h1>Bitcoin Statistcs</h1>
                <Switch>
                    <Route path="/static/trance" component={TranceChart} />
                    <Route path="/static/avg" component={AvgChart} />
                    <Route path="/static" component={MarketChart} />
                </Switch>
            </section>
        )
    }
}

