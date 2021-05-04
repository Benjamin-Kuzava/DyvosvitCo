import { useContext, useState, useEffect } from 'react';
import UserContext from '../context/user';
import { getUserByUserId } from '../services/firebase.js';

// set activeUser in state
const useUser = () => {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    // get resp from user array
    const getUserObjectById = async () => {
      const [currentUser] = await getUserByUserId(user.uid);
      setActiveUser(currentUser);
    };
    if (user?.uid) {
      getUserObjectById();
    }
  }, [user]);
  // return activeUser object aliased as user
  return { user: activeUser };
};

export default useUser;
