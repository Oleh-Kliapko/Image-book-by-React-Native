import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  updateDoc,
  query,
  getCountFromServer,
  where,
  doc,
  FieldValue,
} from "firebase/firestore";
import { db } from "../../firebase/config";

import { postsSlice } from "./postsSlice";

export const uploadPostToServer = (post) => async (dispatch, getState) => {
  const { userId } = getState().auth;

  try {
    await addDoc(collection(db, "posts"), {
      ...post,
      userId,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPosts = () => async (dispatch, getState) => {
  const { userId } = getState().auth;

  try {
    const q = query(collection(db, "posts"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    const allPosts = [];
    querySnapshot.forEach((doc) =>
      allPosts.push({ ...doc.data(), idPost: doc.id })
    );

    dispatch(postsSlice.actions.updatePosts(allPosts));
    return allPosts;
  } catch (error) {
    console.log(error.message);
  }
};

export const changeLikes = (idPost) => async (dispatch, getState) => {
  try {
    const postRef = doc(db, "posts", idPost);
    const countLikes = (await getDoc(postRef)).data().likes;

    await updateDoc(postRef, {
      likes: countLikes + 1,
    });

    dispatch(postsSlice.actions.updateLikes());
  } catch (error) {
    console.log(error.message);
  }
};
