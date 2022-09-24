import IRoute from "./IRoute";

export interface IModuleRoutes {
  key?: string;
  providers?: React.FC<any>;
  routes?: IRoute[];
}