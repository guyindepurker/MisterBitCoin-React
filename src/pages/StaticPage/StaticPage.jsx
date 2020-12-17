
import React, { Component } from 'react'
import Chart from '../../cmps/Chart/'
import { bitcoinService } from '../../services/BitcoinService'
import './StaticPage.scss'

class StaticPage extends Component {
    state = {
        marketPrice: null,
        avgBlock: null,
        trance: null
    }
    componentDidMount() {
        this.loadMarketPrice()
    }
    //load the state functions:
    loadMarketPrice = async () => {
        const marketPrices = await bitcoinService.getMarketPrice()
        const marketPricesFiltered = marketPrices.values.map(value => value.y).splice(0, 10)
        this.setState({ marketPrice: marketPricesFiltered, trance: null, avgBlock: null })
    }
    loadAvgBlock = async () => {
        const avg = await bitcoinService.getAvgBlock()
        const avgFiltered = avg.values.map(value => Math.floor(value.x / 10000)).splice(0, 10)
        this.setState({ avgBlock: avgFiltered, trance: null, marketPrice: null })
    }
    loadTrance = async () => {
        const trance = await bitcoinService.getConfirmedTransactions()
        const tranceFilter = trance.values.map(value => Math.floor(value.x / 100000)).splice(0, 10)
        this.setState({ trance: tranceFilter, avgBlock: null, marketPrice: null })
    }
    render() {
        const { marketPrice, avgBlock, trance } = this.state
        if (!marketPrice && !avgBlock && !trance) return <div>loading..</div>
        return (
            <section className="static-page">
                <div className="btn-controls">
                    <button onClick={this.loadMarketPrice}>Market</button>
                    <button onClick={this.loadTrance}>Trance</button>
                    <button onClick={this.loadAvgBlock}>Avg Block</button>
                </div>
                {marketPrice && <Chart data={marketPrice} />}
                {trance && <Chart data={trance} />}
                {avgBlock && <Chart data={avgBlock} />}
            </section>
        )
    }
}

export default StaticPage
