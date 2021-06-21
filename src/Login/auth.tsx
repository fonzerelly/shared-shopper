import { createContext, useContext, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { session } from "./session";

const authContext = createContext(session);
function useAuth() {
    return useContext(authContext);
  }

export function ProvideAuth({ children }:{children:any}) {
  const [auth] = useState(session);
  return (
      <authContext.Provider value
      ={auth}>
        {children}
      </authContext.Provider>
    );
    }
function urlRedirect() {
  session.url = window.location.pathname

}
export function PrivateRoute({ children, path }:{children:any, path:string}) {
      urlRedirect()
      let auth = useAuth();
      return (
        <Route
          path= {path}
          render={({ location }) =>
            auth.token ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/signin",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
    }
    