import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Users from './users/pages/Users';
import NewProduct from './products/pages/NewProduct';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/' exact component={Users} />
          <Route path='/products/new' exact component={NewProduct} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

// function App() {
//   return (
//     <React.Fragment>
//       <Router>
//         <Switch>
//           <Route exact path='/' component={Home} />
//           <Route component={NoMatch} />
//         </Switch>
//       </Router>
//     </React.Fragment>
//   );
// }

export default App;
