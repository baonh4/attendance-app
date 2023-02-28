import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import api from 'zmp-sdk';
import { RecoilRoot } from "recoil";
import HomePage from "./pages";
import Form from "./pages/form";
import User from "./pages/user";

const MyApp = () => {
  useEffect(() => {
    api.login();
  }, []);

  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/form" element={<Form></Form>}></Route>
              <Route path="/user" element={<User></User>}></Route>
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;