import { GlobalProvider } from "../../context/global/GlobalContext";
import { combineContext } from "../../utils/combineContext";


const providers = [
  GlobalProvider
];

export const AppProvider = combineContext(...providers);
