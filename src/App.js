import React, { Component } from "react";
import { LanguageProvider } from "./components/LanguageContext";
import Main from "./components/Main";

class App extends Component {
  render() {
    const language = { currentLanguage: "english" };
    return (
      <LanguageProvider value={language}>
        <Main />
      </LanguageProvider>
    );
  }
}

export default App;
