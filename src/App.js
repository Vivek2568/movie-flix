import { Provider } from "react-redux";
import Body from "./components/Body";
import Appstore from "./utils/Appstore";
function App() {
  return (
      <Provider store={Appstore} > 
      <Body/>
      </Provider>
  );
}

export default App;
