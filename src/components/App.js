import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamAdd from './streams/StreamAdd';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import history from '../history';

import Header from './Header';

const App = () => {
    return (
        <div className="ui-container">
          <Router history={history}>
              <div>
                  <Header/>
                  <Route path="/" exact component={StreamList}/>
                  <Route path="/streams/add" exact component={StreamAdd}/>
                  <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                  <Route path="/streams/delete" exact component={StreamDelete}/>
                  <Route path="/streams/show" exact component={StreamShow}/>
              </div>
          </Router>
        </div>
    )
}

export default App;
