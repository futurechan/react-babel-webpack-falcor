const React = require('react');
const _ = require('lodash');

const Recipe = require('./recipe')
const model = require('./data')

const RecipeList = React.createClass({
    getInitialState() {
        return {
            recipes: []
        }
    },
    componentWillMount() {
        model.get(['recipes', {from: 0, to: 9}, Recipe.queries.recipe()], ['recipes', {from: 0, to: 9}, 'ingredients', {from: 0, to: 9}, Recipe.queries.ingredients()])
            .then(data => {
                this.setState({
                    recipes: _.values(data.json.recipes)
                })
            })
    },
    render() {
        return (
            <div>
                {
                    this.state.recipes.map( (recipe, index) => {
                        return (
                            <Recipe key={index} {...recipe} />
                        )
                    })
                }
            </div>
        )
    }
});

module.exports = RecipeList;