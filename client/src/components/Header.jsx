import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';
import { ReactComponent as CartIcon } from '../svgs/cart.svg';
import { ReactComponent as SearchIcon } from '../svgs/search.svg';

export default function Header() {
  const user = false;
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const handleLogout = () => {
    firebase.auth().signOut();
    history.push(ROUTES.SIGN_IN);
  };

  const unauthenticatedOptions = (
    <>
      <NavLink to={ROUTES.SIGN_IN}>
        <button
          type="button"
          className="font-bold text-base text-black-base font-Itim rounded w-20 h-8"
        >
          Sign In
        </button>
      </NavLink>
      <NavLink to={ROUTES.SIGN_UP}>
        <button
          type="button"
          className="font-bold text-base text-white bg-gray-base font-Itim rounded w-20 h-8"
        >
          Sign Up
        </button>
      </NavLink>
    </>
  );

  const authenticatedOptions = (
    <NavLink to={ROUTES.SIGN_IN}>
      <button
        type="button"
        className="font-bold text-sm text-black-base font-Itim rounded w-20 h-8"
      >
        Profile
      </button>
    </NavLink>
  );

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
          <div className="flex justify-center items-center text-black-base cursor-pointer">
            <button type="button" className="w-20 h-8 flex justify-center items-center">
              <SearchIcon />
            </button>
            |{user ? authenticatedOptions : unauthenticatedOptions}
            <NavLink
              to={ROUTES.CART}
              aria-label="View Cart"
              className="w-20 flex justify-center items-center"
            >
              <CartIcon />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

// search, login, cart, checkout

// home, shop, about

// flexed container, items on left and right
