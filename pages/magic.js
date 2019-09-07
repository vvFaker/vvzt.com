import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../store'
import Test from '../components/test'

class Magic extends React.Component {
    render () {
        return <Test />
    }
}
const mapDispatchToProps = {  }
export default connect(
    null,
    mapDispatchToProps
)(Magic)
