import { RouterProvider } from "react-router-dom";
import router from "./routes/index";
import "flowbite/dist/flowbite.css";

import { Provider } from "react-redux";
import store from "./stores/index";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
