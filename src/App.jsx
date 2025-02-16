import Navbar from "./Components/Navbar";
import TodoList from "./Components/TodoList";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-stone-300 text-center p-4 md:p-6 text-xl md:text-2xl lg:text-3xl font-bold w-screen">
        My To-Do App
      </header>
      <div className="flex flex-row flex-1">
        <Navbar className="w-1/4 bg-gray-800 text-white p-4 " />
        <div className="flex-1 p-4">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
