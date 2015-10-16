const React = require('react');

const RecipeList = require('./recipeList')

const App = React.createClass({
	render() {
		return (
			<div>
				<RecipeList />
			</div>
		)
	}
});

React.render(<App/>, window.document.getElementById('target'));