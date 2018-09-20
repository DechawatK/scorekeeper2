import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import GameScreenContainer from '../containers/GameScreenContainer'
import SetupScreenContainer from '../containers/SetupScreenContainer'
import SummaryScreenContainer from '../containers/SummaryScreenContainer'
import StartScreenContainer from '../containers/StartScreenContainer'
import { saveToLocalStorage } from '../middlewares'
import reducer from '../reducer'
import '../App.css'
import thunk from 'redux-thunk'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(saveToLocalStorage, thunk)
)

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Route exact path="/" component={StartScreenContainer} />
            <Route path="/setup" component={SetupScreenContainer} />
            <Route path="/summary" component={SummaryScreenContainer} />
            <Route path="/game" component={GameScreenContainer} />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App
