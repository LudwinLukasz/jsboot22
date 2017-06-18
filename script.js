var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return 	React.createElement('h2', {}, this.props.title);
	}
});

var MovieDescription = React.createClass({
	propTypes: {
		description: React.PropTypes.string.isRequired,
	},
	render: function() {
		return 	React.createElement('p', {}, this.props.description);
	}
});

var Movie = React.createClass({
	propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
	render: function() {
		return React.createElement('li', {key: this.props.movie.id},
			React.createElement(MovieTitle, {title: this.props.movie.title}),
			React.createElement(MovieDescription, {description: this.props.movie.description}),
			React.createElement('img', {src: this.props.movie.poster})
		)
 	}
});

var MoviesList = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired,
	},
	render: function() {
		var movies = this.props.items.map(function(movie) {
			return React.createElement(Movie, {movie: movie, key: movie.id});
		});
		return React.createElement('ul', {}, movies);
	}
});

var film1 = {
		id: 1,
		title:'Harry Potter',
		description:'Film o czarodzieju',
		poster:'henryk.jfif'
};
var film2 = {
		id: 2,
		title:'Król lew',
		description:'Film o lwie',
		poster:'krol.jpg'
};
var film3 = {
		id: 3,
		title:'W pustyni i w puszczy',
		description:'Film o lwie i innych takich',
		poster:'pustynia.jfif'
};

var films = [film1, film2, film3];

var filmlist = React.createElement(MoviesList, {items: films});
ReactDOM.render(filmlist, document.getElementById('app'));
