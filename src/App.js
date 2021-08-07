import './App.css';
import {Route, Switch} from 'react-router-dom';
import MobileApps from './pages/Mobile';
import Home from './pages/Home';
import Category from './pages/Category';
import Page404 from './containers/Page404';
import Help from './pages/Help';
import Paidserveces from './pages/Paidserveces';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';


let pages = [
  { path: "/", component: <Home />, exact: true },
  { path: "/mobileapps", component: <MobileApps /> },
  { path: "/help", component: <Help /> },
  { path: "/paidserveces", component: <Paidserveces /> },
  { path: "/page404", component: <Page404 /> },
  { path: "/:category", exact: true, component: <Category />},
  { component: <Page404 /> },

]


function App() {
 
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
               
          {pages.map((page, index) => {
    
            return <Route path={page.path} exact={page.exact} key={page.path}>
              {page.component}
            </Route>
          })}
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
