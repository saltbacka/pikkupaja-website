import React, { Component } from "react";
import ReactGA from "react-ga";

const initGA = () => {
  ReactGA.initialize("UA-152533141-1");
};

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export default class Layout extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    const { children, ...props } = this.props;
    return <div {...props}>{children}</div>;
  }
}
