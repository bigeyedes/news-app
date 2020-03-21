import React from 'react'

function Form(props){
	return(
	<form onSubmit={props.handleSubmit}>
		<div className="columns">
			<div className="column is-5">
				<select value={props.country} onChange={props.handleChangeCountry}>
					<option value="us">USA</option>
					<option value="pl">Poland</option>
					<option value="gb">Great Britain</option>
					<option value="fr">France</option>
					<option value="jp">Japan</option>
					<option value="ru">Russia</option>
				</select>
			</div>
			<div className="column is-5">
				<select value={props.category} onChange={props.handleChangeCategory}>
					<option value="general">General</option>
					<option value="business">Business</option>
					<option value="entertainment">Entertainment</option>
					<option value="health">Health</option>
					<option value="science">Science</option>
					<option value="sports">Sports</option>
					<option value="technology">Technology</option>
				</select>
			</div>
			<div className="column is-2">
				<input type="submit" value="Search" />
			</div>
		</div>
	</form>
	)
}

export default Form;