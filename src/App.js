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
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
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
