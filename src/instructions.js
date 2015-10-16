const React = require('react');

const Instructions = React.createClass({
    statics: {
        queries: {
            recipe(){
                return ["instructions"]
            }
        }
    },
    render() {
        return (
            <h1>{this.props.instructions}</h1>
        )
    }
})

module.exports = Instructions;