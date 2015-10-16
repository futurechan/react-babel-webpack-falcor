const React = require('react');

const $ref = falcor.Model.ref;
const $atom = falcor.Model.atom;

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
					$ref("ingredientsById[2]")
				],
				authors: $atom(["Brian", "John", "Other Person"])
			},
			{
				name: "Brownies",
				instructions: "Also bake them rofl",
				ingredients: [
					{ $type: 'ref', value: ["ingredientsById",1] }
				],
				authors: { $type: 'atom', value: ["Ringo", "Sam"]}
			}
		]
	}
});

//model.get(['recipes', 0, ['name', 'instructions']])
//model.get('recipes[0..1]["name","instructions"]')
model.get('recipes[0..1].ingredients[0..9]["name", "description"]', 'recipes[0..1]["name", "instructions", "authors"]')
	.then( data => {
		console.log(data);
	})

const App = React.createClass({
	render() {
		return (
			<div>
				<RecipeList recipes={[ {name:"Brownies", instructions: "Bake", ingredients:["Flour"]} ]}/>
			</div>
		)
	}
});

const RecipeList = React.createClass({
	render() {
		return (
			<div>
				{
					this.props.recipes.map( recipe => {
						return (
							<Recipe {...recipe} />
						)
					})
				}
			</div>
		)
	}
});

const Recipe = React.createClass({
	render() {
		return (
			<div>
				<Name name={this.props.name} />
				<Instructions instructions={this.props.instructions}/>
				<Ingredients ingredients={this.props.ingredients}/>
			</div>
		)
	}
})

const Name = React.createClass({
	render() {
		return (
			<h1>{this.props.name}</h1>
		)
	}
})

const Instructions = React.createClass({
	render() {
		return (
			<h1>{this.props.instructions}</h1>
		)
	}
})

const Ingredients = React.createClass({
	render() {
		return (
			<h1>{JSON.stringify(this.props.ingredients)}</h1>
		)
	}
})

React.render(<App/>, window.document.getElementById('target'));