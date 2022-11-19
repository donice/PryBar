import CreateEvent from "./pages/dashboard/createEvent/CreateEvent";
import Home from "./pages/home";
import Invitee from "./pages/dashboard/Invitee";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import ViewEvent from "./pages/dashboard/ViewEvent";
import ProfilePage from "./pages/settingsPage/profilePage"
import TermsOfUse from "./pages/termsOfUse";
import Error from "./pages/error404"
import { Routes, Route } from "react-router-dom";
import EventSummary from "./pages/dashboard/EventSummary";
import UpcomingEvent from "./pages/dashboard/UpcomingEvent";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/create_event" element={<CreateEvent />} />
        <Route path="/error" element={<Error />} />
        <Route path="/invitee" element={<Invitee />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/" element={<ProfilePage />} />
        <Route path="/view_event" element={<ViewEvent />} />
        <Route path="/terms_of_use" element={<TermsOfUse />} />
        <Route path="/dashboard/event_summary" element={<EventSummary />} />
        <Route path="/dashboard/upcoming_events" element={<UpcomingEvent />} />
      </Routes>
    </div>
  );
}

export default App;
