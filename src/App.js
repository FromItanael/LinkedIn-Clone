import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import Sidebar from './Sidebar';
import Login from './Login'
import Feed from './Feed';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {!user ? (<Login />) :
        (
          /* App Body */
          < div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>)
      }
    </div>
  );
}

export default App;
