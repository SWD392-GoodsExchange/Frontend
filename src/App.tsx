import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="font-sora overflow-x-hidden overflow-y-auto h-screen text-white bg-gradient-to-b from-gray-200 to-gray-100">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
