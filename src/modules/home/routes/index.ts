

import { IModuleRoutes } from '../../../shared/interfaces/IModuleRoutes';
import IRoute from '../../../shared/interfaces/IRoute';
import { combineContext } from '../../../shared/utils/combineContext';
import { HomeProvider } from '../context/HomeContext';
import Home from '../views/Home/Home';

const routes: IRoute[] = [
  {
    path: '/',
    key: 'HOME_PATH',
    exact: true,
    component: Home,
  },

];

const providers = [HomeProvider];

export default {
  key: 'HOME_MODULE',
  providers: combineContext(...providers),
  routes,
} as IModuleRoutes;
