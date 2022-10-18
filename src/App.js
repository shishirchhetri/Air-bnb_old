import './App.css';
import data from "./data"
import Card from "./components/Card"
import Poster from "./components/Poster"
import Navbar from "./components/Navbar"
function App() {
  const cardData = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}   //{...item}   //if we add {...item} the item. props can be removed in card component
      />
    )
  });
  
  return (
    <>
      <Navbar />
      <Poster />
      <section className='card-container'>
        {cardData}
      </section>
    </>
  );
}

export default App;
