import React from "react";
import App from "next/app";
import Router from "next/router";
import withGA from "next-ga";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default withGA("UA-152533141-1", Router)(MyApp);
