import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import store from "../state_manager/store";

import "../styles/style.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div>
        <Head>
          <title>Lendsqr</title>
        </Head>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
