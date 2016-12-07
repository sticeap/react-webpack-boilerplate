import React, {Component} from 'react'
import {Link} from 'react-router'

class Header extends Component {

    render() {
        const {children} = this.props

        return (
            <div className="header clearfix">
                <nav>
                    <ul className="nav nav-pills float-xs-right">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/inbox">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <h3 className="text-muted">Boilerplate</h3>
            </div>
        )
    }
}

export default Header
