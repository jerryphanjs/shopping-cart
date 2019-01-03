import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import Cart from './components/Cart';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [ thunk ];
const store = createStore(rootReducer, applyMiddleware(...middleware));

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
          <Navbar />
            <div className="row">
              <div className="col s3">
                <Sidebar />
              </div>
              <div className="col s9">
                <Route exact path="/" component={Main} />
                <Route path="/cart/" component={Cart} />
              </div>
            </div>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
