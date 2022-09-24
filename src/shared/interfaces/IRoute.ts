export default interface IRoute {
  path: string;
  key: string;
  exact?: boolean;
  permissions?: 'public' | string[];
  component: React.FC<any>;
  routes?: IRoute[];
}
