import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import TVShow from './components/TVShows'

function App() {
  return (
    <div title="countup-quaratine">
      <BrowserRouter basename={window.location.pathname || ''}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tvreview" component={TVShow} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
