import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header } from './header/header'
import { Footer } from './footer/footer'
import IdleTimerLayout from './IdleTimerLayout'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { LoginPage } from './login/loginpage'


class App extends React.Component {


  constructor(props) {
    super(props)
  }


  render() {

    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path='/' render={(props) => <IdleTimerLayout {...props} />} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  match: PropTypes.any.isRequired,
  history: PropTypes.func.isRequired
}

export default App;