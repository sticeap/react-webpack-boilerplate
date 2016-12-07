import React, {Component} from 'react'

class Footer extends Component {

    render() {
        const {children} = this.props

        return (
            <footer className="footer">
                <p>&copy; Company 2016</p>
            </footer>
        )
    }
}

export default Footer
