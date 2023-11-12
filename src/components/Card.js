import "../components/Cards.css";
import { useState } from "react";

export default function Card(props) {
    const [localTitle, setLocalTitle] = useState(props.title);

    const [localText, setLocalText] = useState(props.description);

    function handleConfirmEdit() {
        props.confirmEdit({ title: localTitle, description: localText });
    }

    return (
        <div className="cards">
            <img
                className="img"
                src={props.image}
                loading="lazy"
                width="300px"
                height="200px"
                alt="missing-card-info"
            />
            <div className="card-body">
                <Title {...props} setLocalTitle={setLocalTitle} />
                <Description {...props} setLocalText={setLocalText} />
                <Footer {...props} handleConfirmEdit={handleConfirmEdit} />
            </div>
        </div>
    );
}

function Title(props) {
    if (props.isEditing)
        return (
            <input
                defaultValue={props.title}
                onChange={(e) => props.setLocalTitle(e.target.value)}
            />
        );

    return <h1>{props.title}</h1>;
}

function Description(props) {
    if (props.isEditing) {
        return (
            <textarea
                rows={8}
                defaultValue={props.description}
                onChange={(e) => props.setLocalText(e.target.value)}
            />
        );
    }

    return <h3>{props.description}</h3>;
}

function Footer(props) {
    function handleSetIsEditing() {
        props.setEditCardId(props.id);
    }

    if (props.isEditing) {
        return (
            <div className="card-footer">
                <button className="bt" onClick={props.handleConfirmEdit}>
                    Confirm
                </button>
            </div>
        );
    }
    return (
        <div className="card-footer">
            <button className="bt" onClick={props.deleteCard}>
                Delete
            </button>
            <button className="bt" onClick={handleSetIsEditing}>
                Edit
            </button>
        </div>
    );
}
