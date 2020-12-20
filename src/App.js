import './styles/_styles.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import {AppHeader} from './cmps/AppHeader/';
import {HomePage} from './pages/HomePage/HomePage';
import {ContactPage} from './pages/ContactPage/';
import {ContactDetailsPage} from './pages/ContactDetailsPage';
import {ContactEdit} from './pages/ContactEdit/';
import {StaticPage} from './pages/StaticPage/';
// import BitCoinApp from './pages/BitCoinApp/'
function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/contact/edit/:id?" component={ContactEdit} /> 
          <Route path="/contact/:id" component={ContactDetailsPage} /> 
          <Route path="/contact" component={ContactPage} /> 
          <Route path="/static" component={StaticPage} /> 
          <Route path="/" component={HomePage} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
