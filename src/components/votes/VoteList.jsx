import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVoteList } from "../../api/api";

const VoteList = () => {
  const { id } = useParams();
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    fetchVoteList();
  }, []);

  const fetchVoteList = async () => {
    try {
      const voteList = await getVoteList(id);
      setVotes(voteList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Vote List</h2>
      <ul>
        {votes.map((vote) => (
          <li key={vote.id}>{vote.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default VoteList;
