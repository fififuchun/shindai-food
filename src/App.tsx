/* eslint-disable react/react-in-jsx-scope */
import "./input.css";
import { MediaQueryProvider } from "./components/Provider/MediaQueryProvider";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <MediaQueryProvider>
      <MainComponent />
    </MediaQueryProvider>
  );
}

export default App;
