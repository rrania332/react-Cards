import "../App.css";
import "../components/AddCard.css";
export default function AddCard(props) {
  const { title, text, img, setimg, settitle, settext, onSubmit } = props;

  return (
    <div className="add_card">
      <label htmlFor="image-field" className="test">
        enter the image{" "}
      </label>
      <input
        className="text"
        id="image-field"
        type="url"
        placeholder="enter the image"
        required
      />

      <label className="test">enter the title </label>
      <input
        className="text"
        type="text"
        placeholder="enter the title"
        required
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <label className="test">enter the text </label>
      <input
        className="text"
        type="text"
        placeholder="enter the text "
        required
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <button type="submit" className="bttn" onClick={onSubmit}>
        submit
      </button>
    </div>
  );
}
