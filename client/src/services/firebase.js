/* eslint-disable import/prefer-default-export */
import { firebase, FieldValue } from '../lib/firebase';

export const getUserByUserId = async (userId) => {
  const resp = await firebase.firestore().collection('users').where('userId', '==', userId).get();

  const user = resp.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }));

  return user;
};
