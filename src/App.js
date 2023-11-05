import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import AddCard from "./components/AddCard";
import { data as testData } from "./test";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState(testData);
  
  const [img, setimg] = useState("");
  const [title, settitle] = useState("");
  const [text, settext] = useState("");

  function deleteCard(id) {
    setData((prev) => prev.filter((item) => item.id !== id));
  }

  function addCard() {
    const newCard = {
      id: uuidv4(),
      title: title,
      description: text,
      image: img
    }

    setData(prev => {
      return [...prev, newCard]
    })

    setimg("")
    settitle("")
    settext("")
  }

  return (
    <div className="App">
      <AddCard
        img={img}
        setimg={setimg}
        title={title}
        settitle={settitle}
        text={text}
        settext={settext}
        onSubmit={addCard}
      />

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
