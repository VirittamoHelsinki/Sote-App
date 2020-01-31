import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

//Transition group downloaded

import TopArea from "./Components/TopArea";
import LandingPage from "./Pages/LandingPage";
import HengitystiePage from "./Pages/HengitystiePage";
import VerenkiertoPage from "./Pages/VerenkiertoPage";
import IhoPage from "./Pages/IhoPage";
import TajuntaPage from "./Pages/TajuntaPage";
import HengitystaajuusPage from "./Pages/HengitystaajuusPage";
import HappisaturaatioPage from "./Pages/HappisaturaatioPage";
import SystolinenverenpainePage from "./Pages/SystolinenverenpainePage";
import SyketaajuusPage from "./Pages/SyketaajuusPage";
import LampotilaPage from "./Pages/LampotilaPage";
import VerensokeriPage from "./Pages/VerensokeriPage";
import TajunnantasoPage from "./Pages/TajunnantasoPage";
import HengitysPage from "./Pages/HengitysPage";
import EmergencyPage from "./Pages/EmergencyPage";

function App() {
  let history = useHistory();
  const [personData, setPersonData] = useState({});
  console.log(personData);
  return (
    <BrowserRouter>
      <div className="App">
        <TopArea history={history} />
        <Switch>
          <Route
            exact={true}
            path="/"
            render={props => <LandingPage history={history} {...props} />}
          />
          <Route
            path="/hengitystie"
            render={props => (
              <HengitystiePage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/hengitys"
            render={props => (
              <HengitysPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/iho"
            render={props => (
              <IhoPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/verenkierto"
            render={props => (
              <VerenkiertoPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/tajunta"
            render={props => (
              <TajuntaPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/hengitystaajuus"
            render={props => (
              <HengitystaajuusPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/happisaturaatio"
            render={props => (
              <HappisaturaatioPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/systolinenverenpaine"
            render={props => (
              <SystolinenverenpainePage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/syketaajuus"
            render={props => (
              <SyketaajuusPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/lampotila"
            render={props => (
              <LampotilaPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/tajunnantaso"
            render={props => (
              <TajunnantasoPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/verensokeri"
            render={props => (
              <VerensokeriPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/hatatilanne"
            render={props => <EmergencyPage history={history} {...props} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
