import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamAdd from './streams/StreamAdd';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';

import Header from './Header';

const App = () => {
    return (
        <div className="ui-container">
          <Router>
              <div>
                  <Header/>
                  <Route path="/" exact component={StreamList}/>
                  <Route path="streams/add" component={StreamAdd}/>
                  <Route path="streams/edit" component={StreamEdit}/>
                  <Route path="streams/delete" component={StreamDelete}/>
                  <Route path="streams/show" component={StreamShow}/>
              </div>
          </Router>
        </div>
    )
}

export default App;
