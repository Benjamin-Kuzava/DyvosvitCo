import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';

export default function Header() {
  const user = false;
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const handleLogout = () => {
    firebase.auth().signOut();
    history.push(ROUTES.SIGN_IN);
  };

  return (
    <header className="h-16 mb-8 bg-white border-b border-gray-primary">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="flex justify-center items-center text-gray-base cursor-pointer">
            <h1 className="flex justify-center w-full">
              <NavLink to={ROUTES.HOME} aria-label="Dyvosvit logo">
                Dyvosvit
              </NavLink>
            </h1>
          </div>

          <div className="flex justify-center items-center text-gray-base cursor-pointer">
            {user ? (
              <>
                <p>user</p>
              </>
            ) : (
              <>
                <p>no user</p>
              </>
            )}
          </div>

          <div className="flex justify-center items-center">nav</div>
        </div>
      </div>
    </header>
  );
}

// search, login, cart, checkout

// home, shop, about

// flexed container, items on left and right
