import React from "react"
import Signup from "./Signupx"
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
                <Route path='/signup' component={Signup} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </AuthProvider>

  )
}

export default App;
