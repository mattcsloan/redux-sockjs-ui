import React from 'react';
import { Link } from 'react-router-dom';

import s from './Header.css';

const Header = ({ title }) =>
  <nav className={s.header}>
    <div>{ title }</div>
    <ul>
      <li>
	      <Link to="/home" title="Go Home">
		      Home
	      </Link>
      </li>
      <li>
	      <Link to="/" title="Start Chat">
		      Chat
	      </Link>
      </li>
    </ul>
  </nav>

export default Header;
