import React from 'react'
import logo from '../github.png'

function Header(){
	return(
		<header className="columns">
			<div className="column logo is-half"><h1>WORLD'S BRAKING NEWS</h1></div>
			<div className="column github is-half">
				<a rel="noopener noreferrer" target="_blank" href="https://github.com/bigeyedes/news-app"><img alt="logo" src={logo}/></a>
			</div>
		</header>
	)
}

export default Header