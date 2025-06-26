import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <h2>Login Page using Context API</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
