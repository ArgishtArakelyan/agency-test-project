import * as React from 'react';
import Welcome from '../organisms/Welcome';

import * as view from '../templates/default/styles.scss';

const App = () => (
  <main className={view.default}>
    <Welcome />
  </main>
);

export default App;
