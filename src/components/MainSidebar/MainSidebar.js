import React from 'react';
import PropTypes from "prop-types";
import s from './MainSidebar.css';

const MainSidebar = ({ users }) => (
	<div id="sidebar" className={s.mainSidebar}>
		<ul>
			{users && users.map(user => (
				<li key={user.id}>{user.name}</li>
			))}
		</ul>
	</div>
);

MainSidebar.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
		}).isRequired
	).isRequired
};

export default MainSidebar;