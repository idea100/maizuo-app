import React, { Component } from 'react'
import Header from 'container/header'

export default class User extends Component {
    componentDidMount () {
        this.props.fetchCinema(this.props.match.params.id)
    }

    render () {
        let cinema = this.props.cinema

        return (
            <div className="cinema">
                <Header {...this.props} title={ cinema.name || '' }/>
                <div>cinema films</div>
            </div>
        )

    }
}

