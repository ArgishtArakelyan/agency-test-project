import * as React from 'react';
import classnames from 'classnames';

import PropTypes from 'prop-types';
import * as styles from './style.scss';

const Feature = (props) => (
  <div
    style={{ backgroundImage: `url(${props.image})` }}
    className={classnames(styles.feature, props.className)}
  >
    {props.children}
  </div>
);

Feature.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  image: PropTypes.string,
};

Feature.defaultProps = {
  className: undefined,
  children: undefined,
  image: '',
};

export default Feature;
