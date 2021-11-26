import React from "react";
import { ThemeContext, Theme } from "./core/context/ThemeProvider";
import RouteProvider from "./routes/routes";
import "./assets/sass/main.scss";

const App: React.FC<{}> = () => {
  const [theme, setTheme] = React.useState(Theme.Dark);
  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <RouteProvider />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
