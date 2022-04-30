import * as React from 'react';
import PropTypes from 'prop-types';

import Button from '../../atoms/Button';

const Block = (props) => (
  // <Card className={props.className}>
  //   {/* <Title>{props.title}</Title> */}
  //   {props.children}
  //   {props.button !== '' && <Button>{props.button}</Button>}
  // </Card>
  <div>
    sadasdasdas
    {props.button !== '' && <Button>{props.button}</Button>}
  </div>
);

Block.propTypes = {
  // className: PropTypes.string,
  // children: PropTypes.node,
  // title: PropTypes.string.isRequired,
  button: PropTypes.string,
};

Block.defaultProps = {
  // className: '',
  button: '',
};

export default Block;
