import { Auth, Home } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PropTypes from 'prop-types'
import classNames from 'classnames';

import './App.scss';


function App() {
  return (
    
    <div className={classNames('wraper', {'authPage': true})}>
      <Router>
          <Switch>
          <Route path="/im"  render={()=> {return <Home/>}} />
          <Route path={['/', "/login", '/register']} render={match => {
            return (
                <Auth match={match} />
            )
          }} />  
          </Switch>


      </Router>
    </div>
  );
}

App.propTypes = {
  className: PropTypes.string
}

export default App;
