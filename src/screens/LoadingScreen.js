import React, { useEffect, useContext } from 'react';

import { Context as AuthContext } from '../context/AuthContext';

function LoadingScreen() {
  const { tryLocalSignIn } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignIn();
  }, []);

  return null;
}

export default LoadingScreen;
