import "./App.css";
import Category from "./components/category/Category";
import Navbar from "./components/navbar/Navbar";
import SuggestList from "./components/suggestList/SuggestList";

function App() {
  return (
    <div className="font-sora overflow-x-hidden overflow-y-auto h-screen text-white bg-gradient-to-b from-gray-200 to-gray-100">
      <Navbar />
      <Category />
      <SuggestList />
    </div>
  );
}

export default App;
