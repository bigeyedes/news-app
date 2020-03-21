import React from 'react'
import Form from './Form'

require('dotenv').config()

class Result extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			newses: [],
			country: 'pl',
			category: 'general'
		};
	  }

	handleChangeCountry = (event) => {
		this.setState({
			country: event.target.value
		});
	}
	handleChangeCategory = (event) => {
		this.setState({
			category: event.target.value
		});
	} 

	//Send requst to API adn get back newses
	getApiRequest() {
		const api_key = process.env.REACT_APP_NEWS_API_KEY;
		const url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=${api_key}`;
		console.log(url)

		let req = new Request(url);
		fetch(req)
		.then(res => res.json())
		.then((json) => {
			  this.setState({
				newses: json.articles
			  });
			},
			(error) => {
			  this.setState({
				error
			  });
			}
		  )
	}

	//Send requst to API on form submit
	handleSubmit = (event) => {
		this.getApiRequest()
		event.preventDefault();
	}

	//Default and first API request
	componentDidMount() {
		this.getApiRequest()
	}

	  render() {
		const { error } = this.state;
		//News wrapper template
		const renderNews = this.state.newses.map(function(article, index) {
			if (index === 0) {
				return 	<div key={index} id={index} className="column main-article is-12-desktop is-12-tablet">
								<div className="article" key={article.id}>
									<div className='image-wrapper' style={{backgroundImage: 'url(' + article.urlToImage + ')'}}>
									</div>
									<div className="misc">
										<p>{article.publishedAt.substring(0, 10)}</p>
										<a rel="noopener noreferrer" target="_blank" href={article.url}><h2>{article.title}</h2></a>
										<div className="provider">
											<span>{article.source.name}</span>
										</div>
										<div className='excerpt'>{article.description}</div>
									</div>
								</div>
						</div>
			} else if (index === 1 || index === 2){
				return 	<div key={index} id={index} className="column main-article sec-third-articles is-6">
								<div className="article" key={article.id}>
									<div className='image-wrapper' style={{backgroundImage: 'url(' + article.urlToImage + ')'}}>
									</div>
									<div className="misc">
										<p>{article.publishedAt.substring(0, 10)}</p>
										<a rel="noopener noreferrer" target="_blank" href={article.url}><h2>{article.title}</h2></a>
										<div className="provider">
											<span>{article.source.name}</span>
										</div>
									</div>
								</div>
							</div>
			}
			else {
				return 	<div key={index} id={index} className="column is-4-desktop is-6-tablet other-article">
							<a rel="noopener noreferrer" target="_blank" href={article.url}>
								<div className="article" key={article.id}>
									<div className='image-wrapper' style={{backgroundImage: 'url(' + article.urlToImage + ')'}}>
									</div>
									<div className="misc">
										<p>{article.publishedAt.substring(0, 10)} | {article.source.name}</p>
										<a rel="noopener noreferrer" target="_blank" href={article.url}><h2>{article.title}</h2></a>
										<div className='excerpt'>{article.description}</div>
									</div>
								</div>
								</a>
						</div>
			}
		});
		if (error){
			return <div>Błąd aplikacji: {error.message}</div>
		} else {
			return (

				<div>
					<Form
					handleSubmit={this.handleSubmit}
					country={this.state.country}
					handleChangeCountry={this.handleChangeCountry}
					category={this.state.category}
					handleChangeCategory={this.handleChangeCategory}
					/>
				<div className="columns">
					{renderNews}
				</div>
				</div>
			);
		}
	}
}

export default Result