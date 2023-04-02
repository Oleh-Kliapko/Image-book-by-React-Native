import { Provider } from "react-redux";
import Toast from "react-native-toast-message";

import { store } from "./src/redux/store";
import { toastConfig } from "./src/utils/toasts";
import Main from "./src/components/Main/Main";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
      <Toast position="top" topOffset={60} config={toastConfig} />
    </Provider>
  );
}
