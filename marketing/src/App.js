import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const App = () => {
  console.log("Hi");
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/pricing' component={Pricing} />
            <Route path='/' component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
};

export default App;



// https://microfrontend-practice-swamiprasad.s3.us-east-1.amazonaws.com/marketing/latest/remoteEntry.js
// httpS://microfrontend-practice-swamiprasad.s3-us-east-1.amazonaws.com/marketing/remoteEntry.js