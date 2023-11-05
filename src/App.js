import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import AddCard from "./components/AddCard";
import { data as testData } from "./test";
import Card from "./components/Card";

function App() {
    const [data, setData] = useState(testData);

    const [img, setimg] = useState("");
    const [title, settitle] = useState("");
    const [text, settext] = useState("");

    const [editCardId, setEditCardId] = useState("");

    function deleteCard(id) {
        setData((prev) => prev.filter((item) => item.id !== id));
    }

    function addCard() {
        const newCard = {
            id: uuidv4(),
            title: title,
            description: text,
            image: img,
        };

        setData((prev) => {
            return [...prev, newCard];
        });

        setimg("");
        settitle("");
        settext("");
    }

    function handleSetEditCardId(id) {
        setEditCardId(id);
    }

    function confirmEdit(newCardData) {
        console.log("confirmed", newCardData);

        setData((prev) => {
            return prev.map((el) => {
                if (el.id !== editCardId) return el;

                return {
                    ...el,
                    title: newCardData.title,
                    description: newCardData.description,
                };
                // return {...el, ...newCardData}
            });
        });

        setEditCardId("");
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
                        setEditCardId={handleSetEditCardId}
                        isEditing={el.id === editCardId}
                        confirmEdit={confirmEdit}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
