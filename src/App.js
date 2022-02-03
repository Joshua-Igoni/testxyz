import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { SignUpForm, LogInForm } from "./components/auth";
import Header from "./components/homepage/Header";
import Homepage from "./components/homepage/Homepage";
import routes from "./routes";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path={routes.LOGIN} element={<LogInForm />} />
        <Route path={routes.SIGNUP} element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App;
