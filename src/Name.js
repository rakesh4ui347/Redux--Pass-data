import React from 'react'
import store from './Action'

function Name(props) {
    return (
        <div>
            My name is: {store.getState()}
        </div>
    )
}

export default Name