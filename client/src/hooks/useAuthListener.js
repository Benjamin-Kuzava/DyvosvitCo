import { useContext, useEffect, useState } from 'react';
import FirebaseContext from '../context/firebase';

const useAuthListener = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      // user -> store in localStorage
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // no user -> clear localStorage
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    // cleanup
    return () => listener();
  }, [firebase]);
  console.log({ user });
  return { user };
};

export default useAuthListener;
