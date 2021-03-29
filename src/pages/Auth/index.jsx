import { Component } from 'react'
import { Block } from '../../components'
import {LoginForm, RegisterForm} from '../../modules'


import './Auth.scss'

export default class Auth extends Component  {
  componentDidMount() {
    let {pathname} = this.props.match.location;
    if (pathname.includes('register')) {
    this.setState({
      pathname
    })
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.location.pathname !== this.props.match.location.pathname) {
      let {pathname} = this.props.match.location
      this.setState({
        pathname
      })
    }
  }

  state = {
    pathname: '/login',
    registerClicked: false
  }

  registerClickedFunc = () => {
    this.setState((state) => {
      return {
        registerClicked: !state.registerClicked
      }
    })
  }

render() {
    
    let {pathname} = this.state

    return (
      <section className="auth">
        <Block>
          {pathname==='/login' ? <LoginForm/> :
          <RegisterForm registerClickedFunc={this.registerClickedFunc} registerClicked={this.state.registerClicked}/>}          
        </Block>
        <button onClick={() => console.log(this.state)}>State Auth</button>
        <button onClick={() => console.log(this.props)}>Props Auth</button>
      </section>
    );
    }  
}
