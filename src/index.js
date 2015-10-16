const React = require('react');

const model = new falcor.Model({
	//source: new falcor.HttpDataSource('./model.json')
	cache: {
		ingredientsById:{
			1:{
				name: "Flour",
				description: "White and Powdery"
			},
			1:{
				name: "Chocolate Chips",
				description: "Delicious"
			}
		},
		recipes:[
			{
				name: "Cookies",
				instructions: "Bake them lol",
				ingredients: [
					{ $type: 'ref', value: ["ingredientsById",1] },
					{ $type: 'ref', value: ["ingredientsById",2] }
				]
			},
			{
				name: "Brownies",
				instructions: "Also bake them rofl",
				ingredients: [
					{ $type: 'ref', value: ["ingredientsById",1] }
				]
			}
		]
	}
});

//model.get(['recipes', 0, ['name', 'instructions']])
//model.get('recipes[0..1]["name","instructions"]')
model.get('recipes[0..1].ingredients[0..9]["name", "description"]', 'recipes[0..1]["name", "instructions"]')
	.then( data => {
		console.log(data);
	})

const App = React.createClass({
	render() {
		return <h1>hi lol</h1>
	}
});

React.render(<App/>, window.document.getElementById('target'));