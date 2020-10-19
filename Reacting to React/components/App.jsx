import React, { Component, Fragment } from 'react'

// let App = (props) => {
//     return <h1>{props.name}</h1>
// }

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.name,
            inputText: '',
            placeholder: 'This is a placeholder',
            hasLoaded: false
        }

    }


    handleClick = () => {
        this.setState({ hasLoaded: !this.state.hasLoaded })
    }

    handleChange = (e) => {
        this.setState({ inputText: e.target.value })
    }

    componentDidMount = () => {
        this.setState({hasLoaded: true})
    }

    render() {
        if (this.state.hasLoaded === false) {
            return (
                <Fragment>
                    <h1>{this.props.name}</h1>
                    <h1>{this.state.text}</h1>
                    <input type="text" placeholder={this.state.placeholder} value={this.state.inputText} onChange={(e) => { this.handleChange(e) }} />
                    <h1>{this.state.inputText}</h1>
                    <button onClick={this.handleClick}>Load It!</button>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <h1>Loading....</h1>
                    <button onClick={this.handleClick}>Load It!</button>
                </Fragment>
            )
        }
    }
}

export default App;