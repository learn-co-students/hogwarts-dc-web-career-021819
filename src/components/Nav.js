import piggy from '../porco.png'
import React from 'react'
import Search from './Search.js'
import Sort from './Sort.js'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<div>
				<Search searchBarHandler={props.searchBarHandler}/>
				<Sort sortHandler={props.sortHandler} greasedHandler={props.greasedHandler}/>
			</div>
		</div>
	)
}

export default Nav
