import React, {
  useCallback,
  useEffect,
  useMemo,
} from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../../infra/http/routes';

import { AppProvider } from './partials';

const STORAGE_KEY = '@TEMPLATE/AUTH';

const App: React.FC = () => {

/*   const { loading, initialized } = useGlobal();
  const dispatch = useDispatch();
  const authState = useAuth();

  const handleUserLogout = useCallback(() => {
    dispatch({ type: AllActions.auth.LOGOUT_SIGNED_USER });
  }, [dispatch]);

  const initIndexedDb = useCallback((userId?: string | number) => {
    if (userId) {
      initDB(dbconfig(`lms-db-${userId}`));
    }
  }, []);

  const recoverUserData = useCallback(() => {
    dispatch({ type: AllActions.global.SET_LOADING, payload: true });

    let storedState = LocalStorageService.recover(STORAGE_KEY);
    if (storedState) {
      initIndexedDb(storedState?.signedUser?.id);
      dispatch({ type: AllActions.auth.SET_AUTH_STATE, payload: { ...storedState } });
    }

  }, [dispatch, initIndexedDb]);

  const updateUserData = useCallback(() => {
    let newState = { ...authState };

    if (newState.signedUser) {
      let decodedToken = jwt.decode(newState.signedUser.token) as IDecodedToken;
      let date = new Date();
      if (decodedToken.exp < date.getTime() / 1000) return handleUserLogout();
    }

    LocalStorageService.create(STORAGE_KEY, newState);

    initIndexedDb(authState?.signedUser?.id);
    dispatch({ type: AllActions.global.SET_GLOBAL_STATE, payload: { loading: false, initialized: true } });

  }, [authState, dispatch, handleUserLogout, initIndexedDb]);

  useEffect(() => recoverUserData(), [recoverUserData]);
  useEffect(() => updateUserData(), [updateUserData]); */

  const render = useMemo(() => {
      return (
        <Router>
          <main>
            <div className="content">
              <AppRouter />
            </div>
          </main >
        </Router>
      );
  }, []);

  return (
    <AppProvider>
      {render}
    </AppProvider>
  )
}

export default App;
