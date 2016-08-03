// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React from 'react';
import GrommetApp from 'grommet/components/App';

import Nav from './containers/Nav';

class App extends React.Component {
  render() {
    return (
      <GrommetApp centered={false}>
      	<Nav />
        {this.props.children}
      </GrommetApp>
    );
  }
}

export default App;
