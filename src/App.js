import { Route, Switch } from "react-router-dom";

import AllMeetupPage from "./pages/AllMeetups";
import FavouritePage from "./pages/Favourite";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupPage></AllMeetupPage>
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage></NewMeetupPage>
        </Route>
        <Route path="/favourite">
          <FavouritePage></FavouritePage>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
