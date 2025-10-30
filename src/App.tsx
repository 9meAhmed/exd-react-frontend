import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user } = useAuth();
  return (
    <div>
      <p>User: {user ? user.email : "No user logged in"}</p>
    </div>
  );
};

export default App;
