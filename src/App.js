import { useState } from "react";
import "./App.css";
import AddCard from "./components/AddCard";
import { data as testData } from "./test";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState(testData);
  function deleteCard(id) {
    setData((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <AddCard />
      <div className="card">
        {data.map((el) => (
          <Card
            id={el.id}
            key={el.id}
            image={el.image}
            title={el.title}
            description={el.description}
            deleteCard={() => deleteCard(el.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
