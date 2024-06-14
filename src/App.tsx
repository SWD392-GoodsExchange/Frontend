import "./App.css";
import Content from "./components/Content/Content";
import Category from "./components/category/Category";
import Navbar from "./components/navbar/Navbar";
import Slogan from "./components/slogan/Slogan";
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
