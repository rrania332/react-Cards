import { useState } from "react";
import "../App.css";

export default function AddCard() {
  const [img, setimg] = useState("");
  const [title, settitle] = useState("");
  const [text, settext] = useState("");
  console.log(title);
  console.log(text);
  return (
    <div className="add_card">
      <label>enter the image : </label>
      <input type="url" placeholder="enter the image" required />
      <label>enter the title : </label>
      <input
        type="text"
        placeholder="enter the title"
        required
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <label>enter the text : </label>
      <input
        type="text"
        placeholder="enter the text"
        required
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <button type="submit" className="bttn">
        submit
      </button>
    </div>
  );
}
