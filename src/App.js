import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <div title="countup-quaratine">
      <BrowserRouter basename={window.location.pathname || ''}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
