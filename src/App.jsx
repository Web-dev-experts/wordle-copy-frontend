import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import LandingMenu from "./pages/LandingMenu";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AuthContext from "./Features/AuthContext";
import ToastProvider from "./Features/ToastContext";

function App() {
  return (
    <>
      <ToastProvider>
        <AuthContext>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingMenu />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/play" element={<Game />} />
            </Routes>
          </BrowserRouter>
        </AuthContext>
      </ToastProvider>
    </>
  );
}

export default App;
