const React = require('react');

const Name = React.createClass({
    statics: {
        queries: {
            recipe(){
                return ["name"]
            }
        }
    },
    render() {
        return (
            <h1>{this.props.name}</h1>
        )
    }
})

module.exports = Name;