import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cardElements = data.map((item) => {
    return (
      <>
        {item.id !== 1 && <hr />}
        <Card key={item.id} {...item} />
      </>
    );
  });
  return (
    <>
      <Header />
      {cardElements}
    </>
  );
}

export default App;
