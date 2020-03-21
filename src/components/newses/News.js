import React from 'react'

class News extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			newses: props.newses
		}
	}
	render(){
		const renderNews =  this.state.newses.map(function(article, index) {
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
		return (
			{renderNews}
		)
	}
}

export default News