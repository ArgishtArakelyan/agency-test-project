import * as React from 'react';

import Feature from '../organisms/feature';
import * as view from '../templates/default/styles.scss';
import Block from '../molecules/block';

import '../../bootstrap';

const App = () => (
  <div className={view.default}>
    <Feature
      className={view.hero}
      image="https://i.pinimg.com/originals/7e/d6/1a/7ed61a337b0cccb1598fe5fd1b9724bf.jpg"
    >
      <Block title="Atom" button="Learn more" />
    </Feature>
  </div>
);

export default App;
