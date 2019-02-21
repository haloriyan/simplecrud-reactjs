import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import All from './screen/All';
import Add from './screen/Add';
import Delete from './screen/Delete';
import Edit from './screen/Edit';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={All} exact />
          <Route path="/add" component={Add} />
          <Route path="/delete/:iduser" component={Delete} />
          <Route path="/edit/:iduser" component={Edit} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;