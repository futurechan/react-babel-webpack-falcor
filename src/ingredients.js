const React = require('react');

const Ingredients = React.createClass({
    statics: {
        queries: {
            ingredients(){
                return ["name", "description"]
            }
        }
    },
    render() {
        return (
            <h1>{JSON.stringify(this.props.ingredients)}</h1>
        )
    }
})

module.exports = Ingredients;