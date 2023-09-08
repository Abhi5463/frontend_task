"use client";
import React from "react";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import EmailPage from '../pages/EmailPage';

export default function Home() {
  return (
    <Provider store={store}>
    <EmailPage />
    </Provider>
  );
}
