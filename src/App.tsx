import "./App.css";
import Category from "./components/category/Category";
import Navbar from "./components/navbar/Navbar";
import SuggestList from "./components/suggestList/SuggestList";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="font-sora overflow-x-hidden overflow-y-auto h-screen text-white bg-gradient-to-b from-gray-200 to-gray-100">
      <HomePage />
    </div>
  );
}

export default App;
