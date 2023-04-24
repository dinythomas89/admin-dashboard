import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Router from "./components/router/Router";
import "./App.scss";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="body-container">
        <Sidebar />
        <Router />
      </div>
    </div>
  );
};

export default App;
