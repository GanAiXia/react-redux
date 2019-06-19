import React from 'react'
import {connect} from 'react-redux'

import Counter from '../components/counter'
import { increment,decrement,asyncIncrement } from '../redux/actions'

export default connect(
    number => ({number}),
    {increment,decrement,asyncIncrement}
)(Counter)
