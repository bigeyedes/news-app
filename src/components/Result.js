import React from 'react'


class Result extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  newses: []
		};
	  }


	componentDidMount() {
		const url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
		  'apiKey=c5573d78ed0f4389a2900abe9c00a73f';

		let req = new Request(url);
		fetch(req)
		.then(response => response.json())
		.then(json => this.setState({newses: json.articles}))
	  }

	  render() {
		const renderNews = this.state.newses.map(function(article, i) {
			return 	<div className="column is-half">
						<div className="article" key={article.id}>
							<div className='image-wrapper'>
								<img className="image" alt="#" src={article.urlToImage}/>
							</div>
							<div className="misc">
								<h2>{article.title}</h2>
								<div className="provider">
									<span>{article.source.name}</span>
									<a rel="noopener noreferrer" target="_blank" className="live-btn" href={article.url}>SEE LIVE</a>
								</div>
								<div className='excerpt'>{article.description}</div>
							</div>
						</div>
					</div>
		});
		return (
			<div className="columns">
				{renderNews}
			</div>
		);
	}
}

export default Result