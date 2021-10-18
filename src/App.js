import Header from './pages/shared/Header/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Account from './pages/Account/Account';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import AuthProvider from './context/AuthContext';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact-us">
            <Contact />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
