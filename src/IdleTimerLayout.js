import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IdleTimer from 'react-idle-timer';
import { HomePage } from './dashboard/homepage';
import { Modals } from './modal/modals';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class IdleTimerLayout extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            timeout: 1000 * 20 * 1, // second
            showModal: false,
            userLoggedIn: false,
            isTimedOut: false
        }

        this.idleTimer = null
        this.onAction = this._onAction.bind(this)
        this.onActive = this._onActive.bind(this)
        this.onIdle = this._onIdle.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }


    _onAction(e) {
        console.log('user did something', e)
        this.setState({ isTimedOut: false })
    }

    _onActive(e) {
        console.log('user is active', e)
        this.setState({ isTimedOut: false })
    }

    _onIdle(e) {
        console.log('user is idle', e)
        const isTimedOut = this.state.isTimedOut
        if (isTimedOut) {
            this.props.history.push('/')
        } else {
            this.setState({ showModal: true })
            this.idleTimer.reset();
            this.setState({ isTimedOut: true })
        }

    }


    handleClose() {
        this.setState({ showModal: false })
    }

    handleLogout() {
        this.setState({ showModal: false })
        this.props.history.push('/')
    }


    render() {
        const { match } = this.props
        return (
            <div>
                <IdleTimer
                    ref={ref => { this.idleTimer = ref }}
                    element={document}
                    onActive={this.onActive}
                    onIdle={this.onIdle}
                    onAction={this.onAction}
                    debounce={250}
                    timeout={this.state.timeout} />

                <div className="">
                    <Switch>
                        <Route
                            exact path={`${match.path}dashboard`}
                            render={(props) => <HomePage {...props} />} />
                        />
                </Switch>

                    <Modals
                        showModal={this.state.showModal}
                        handleClose={this.handleClose}
                        handleLogout={this.handleLogout}
                    />
                </div>
            </div>
        )
    }
}

IdleTimerLayout.propTypes = {
    match: PropTypes.any.isRequired,
    history: PropTypes.func.isRequired
}

export default IdleTimerLayout;