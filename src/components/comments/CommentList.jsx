import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentList } from "../../api/api";

const CommentList = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentList();
  }, []);

  const fetchCommentList = async () => {
    try {
      const commentList = await getCommentList(id);
      setComments(commentList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Comment List</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
