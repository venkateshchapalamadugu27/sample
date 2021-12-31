import React, { Component } from 'react'
import AndhraBank from './AndhraBank'
import CorporationBank from './CorporationBank'

export default class UnionBank extends Component {
    render() {
        return (
            <div>
                <h1>Union Bank</h1>
                <AndhraBank location="vijaywada"/>
                <CorporationBank location="tirupati"/>
            </div>
        )
    }
}

