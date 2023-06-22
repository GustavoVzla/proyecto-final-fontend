import { useState } from "react";
import { useParams } from "react-router-dom";
import { createComment } from "../../api/api";

const CreateComment = () => {
  const { id } = useParams();
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text || !id) throw new Error("Missing required fields");

    try {
      await createComment(id, text);

      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create Comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button type="submit">Create Comment</button>
      </form>
    </div>
  );
};

export default CreateComment;
