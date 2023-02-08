import './App.css';
import Header from "./components/Header";
import HeartsList from './components/HeartsList';


function App() {
  return (
    //Using empty element "fragment" because components can only return one element. Fragements are useful because they create minimal overhead for the Virtual DOM
    <>
      <Header />
      <HeartsList />
    </>
  );
}

export default App;
