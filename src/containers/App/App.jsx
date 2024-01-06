import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "@components/Header";
import routesConfig from "@routes/routesConfig";

import cl from './App.module.scss';
import '@src/index.scss';


export const App = () => {
  return (
      <div className='App'>
      <Router>
          <div className={cl.wrapper}>
              <Header />

            <Routes>
            {routesConfig.map((route, index) => (
              <Route 
                  key={index}
                  path={route.path} 
                  exact={`${route.exact}`}
                  element={route.component}
                  />
                  ))}
            </Routes>

          </div>
      </Router>
      </div>
  )
}
