
import React from 'react';
import { string } from 'prop-types';

import cx from 'classnames';
import s from './LoadingState.css';


// @TODO we can make this more robust in terms of having the component respond to an isLoading prop
// handling errors and that kind of thing. For now, simply displaying an animation will suffice.

/*
@params:
context - plain string to target a page/component for specific styling
*/
const LoadingState = ({ ...props }) =>
  <div className={cx(s.component, s[props.context])}>
    <div className={s.threeDotsBouncing}></div>
    <div className={s.threeDotsBouncing}></div>
    <div className={s.threeDotsBouncing}></div>
  </div>;

LoadingState.propTypes = {
  context: string,
};

export default LoadingState;
