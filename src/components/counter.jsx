import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        number: 0
    }
    increment = () => {
        const number = this.select.value * 1
        this.props.increment(number)
    }
    decrement = () => {
        const number = this.select.value * 1
        this.props.decrement(number)
    }
    ifIncrement = () => {
        const number = this.select.value * 1
        const num = this.props.number
        if (num%2 == 1) {
            this.props.increment(number)            
        }
    }
    asyncIncrement = () => {
        const number = this.select.value * 1
        this.props.asyncIncrement(number)
    }
    render() {
        const number = this.props.number
        return (
            <div>
               <h3>简易计算器</h3>
               <h4>{number}</h4>
               <select ref={select => this.select = select}>
                   <option value="1">1</option>
                   <option value="3">3</option>
                   <option value="5">5</option>
                   <option value="5">5</option>
               </select>&nbsp;&nbsp;
               <button onClick={this.increment}>+</button>&nbsp;&nbsp;
               <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
               <button onClick={this.asyncIncrement}>async +</button>&nbsp;&nbsp;
               <button onClick={this.ifIncrement}>if +</button>&nbsp;&nbsp;
            </div>
        )
    }
}
