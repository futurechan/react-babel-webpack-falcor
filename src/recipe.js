const React = require('react');
const _ = require('lodash');

const Name = require('./name')
const Instructions = require('./instructions')
const Ingredients = require('./ingredients')

const Recipe = React.createClass({
    statics: {
        queries: {
            recipe(){
                return _.union( Name.queries.recipe(), Instructions.queries.recipe() )
            },
            ingredients(){
                return Ingredients.queries.ingredients();
            }
        }
    },
    render() {
        return (
            <div>
                <Name {..._.pick(this.props, Name.queries.recipe())} />
                <Instructions {..._.pick(this.props, Instructions.queries.recipe())}/>
                <Ingredients ingredients={this.props.ingredients}/>
            </div>
        )
    }
})

module.exports = Recipe;