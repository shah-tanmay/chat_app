import React, { Component } from "react";

const LanguageContext = React.createContext();

// export const LanguageProvider = LanguageContext.Provider;
export const LanguageConsumer = LanguageContext.Consumer;

export class LanguageProvider extends Component {
  state = {
    language: "English",
  };

  setLanguage = (language) => this.setState({ language });

  render() {
    const { children } = this.props;
    const { language } = this.state;
    const { setLanguage } = this;
    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageContext;
