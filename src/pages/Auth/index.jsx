import { Block } from '../../components'
import {LoginForm} from '../../modules/LoginForm'


import './Auth.scss'

function Auth() {


  return (
    <section className="auth">
      <Block>
        <LoginForm/>
      </Block>
    </section>
  );
}

export default Auth;
