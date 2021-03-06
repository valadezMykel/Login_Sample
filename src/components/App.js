import React from "react"
import Signup from "./Signupx"
import Login from './Login'
import Dashboard from './Dashboard'
import { Container } from "react-bootstrap"
import { AuthProvider } from '../context/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <AuthProvider>
      <Container 
        className="d-flex align-items-center justify-content-center" 
        style={{ miniHeight: "100vh"}}
      >
        <div className="w-100 mt-5" style={{ maxWidth: '400px'}}>
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />

              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </AuthProvider>

  )
}

export default App;
