import {useEffect, useState} from "react";
import axios from "axios";

const JournalAdmin = () => {
  const [journal, setJournal] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/journal")
      .then((res) => {
        setJournal(res.data);
      })
  },[])
  return (
    <div>
      <h1>Journal Admin</h1>
      {journal?.map((item) => (
        <div key={item._id}>{item._id}</div>
      ))
      }
    </div>
  );
}

export default JournalAdmin;
