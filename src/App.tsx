import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserSearchPage from './pages/UserSearchPage'
import UserPage from './pages/UserPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <UserSearchPage />
        </Route>
        <Route exact path="/:login">
          <UserPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
