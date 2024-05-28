import "./App.css";
import { Router } from "./Router";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./data/store";
import { ThemeProvider } from "./contexts/Theme";

function App() {
  return (
    <ThemeProvider>
      <ReduxProvider store={store}>
        <Router />
      </ReduxProvider>
    </ThemeProvider>
  );
}

export default App