import "../App.css";

export default function AddCard(props) {
    const { title, text, img, setimg, settitle, settext, onSubmit } = props;

    return (
        <div className="add_card">
            <label htmlFor="image-field">enter the image : </label>
            <input
                id="image-field"
                type="url"
                placeholder="enter the image"
                required
            />
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
            <button type="submit" className="bttn" onClick={onSubmit}>
                submit
            </button>
        </div>
    );
}
