import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserContext from './context/user';
import useAuthListener from './hooks/useAuthListener';
import * as ROUTES from './constants/routes';
import Loading from './components/Loading';

// Code splitting into dynamic chunks
const Home = lazy(() => import('./pages/Home'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={user}>
      <Suspense fallback={<Loading delay={500} />}>
        <Switch>
          <Route path={ROUTES.HOME} component={Home} />
        </Switch>
        <Switch>
          <Route path={ROUTES.SIGN_IN} component={SignIn} />
        </Switch>
        <Switch>
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
        </Switch>
      </Suspense>
    </UserContext.Provider>
  );
}

export default App;
