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
			return <div className="article" key={article.id}>
					<div className='image'>
						<img alt="#" src={article.urlToImage}></img>
					</div>
					<p className="title">{article.title}</p>
					<div className="misc">
						<div className="provider">
							<span>{article.source.name}</span><span><a href={article.url}>LIVE</a></span>
						</div>
						<div className='excerpt'>{article.description}</div>
					</div>
				</div>
		});
		return (
			<div>
				{renderNews}
			</div>
		);
	}
}

export default Result