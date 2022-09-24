import home  from '../../../../modules/home/routes/index'
import { IModuleRoutes } from '../../../interfaces/IModuleRoutes';




const modulesRoutes: IModuleRoutes[] = [];

export default modulesRoutes.concat(
  home
);
