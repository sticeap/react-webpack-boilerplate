import React, {Component} from 'react'
import Footer from 'commons/Footer'
import Header from 'commons/Header'

class App extends Component {

    render() {
        const {children} = this.props

        return (
            <div className="container">
                <Header />
                {children}
                <Footer />
            </div>
        )
    }
}

export default App
