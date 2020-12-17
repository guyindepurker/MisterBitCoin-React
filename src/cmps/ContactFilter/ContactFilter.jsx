


import React, { Component } from 'react'
import './ContactFilter.scss'

export default class ContactFilter extends Component {
    state = {
       filterBy:{
           term:''
       }
    }
    onChangeHandler=(ev)=>{
        const filed = ev.target.name
        const value = ev.target.value
        this.setState(prevState=>({filterBy:{...prevState.filterBy,[filed]:value}}),()=>{
            console.log('this.state.filterBy:', this.state.filterBy)
            this.props.setFilter(this.state.filterBy)
        })
    }
    render() {
        return (
            <section className="contact-filter">
                <input type="text" onChange={this.onChangeHandler} name="term" value={this.state.term} placeholder="enter a keyword"/>
            </section>
        )
    }
}

