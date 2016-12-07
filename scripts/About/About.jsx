import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getAbout} from './About.actions'

class About extends Component {
    componentWillMount() {
        const {getAbout} = this.props

        getAbout()
    }

    render() {
        const {children, pageData} = this.props

        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-3">About</h1>
                    <p className="lead">{pageData.title}</p>
                    <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
                </div>

                <div className="row marketing">
                    <div className="col-lg-6">
                        <h4>Subheading</h4>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

                        <h4>Subheading</h4>
                        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus
                            sit amet fermentum.</p>

                        <h4>Subheading</h4>
                        <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    </div>

                    <div className="col-lg-6">
                        <h4>Subheading</h4>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

                        <h4>Subheading</h4>
                        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus
                            sit amet fermentum.</p>

                        <h4>Subheading</h4>
                        <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({
    getAbout
}, dispatch)

const mapStateToProps = (state) => ({
    pageData: state.about.pageData
})

export default connect(mapStateToProps, mapDispatchToProps)(About);