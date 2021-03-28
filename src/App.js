import Auth from './pages/Auth';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PropTypes from 'prop-types'
import classNames from 'classnames';

import './App.scss';


function App() {
  return (
    
    <div className={classNames('wraper', {'authPage': true})}>
      <Router>
        <Route path={['/', "/login", 'register']} render={match => {
          return (
              <Auth match={match} />
          )
        }} />        
      </Router>
    </div>
  );
}

App.propTypes = {
  className: PropTypes.string
}

export default App;
