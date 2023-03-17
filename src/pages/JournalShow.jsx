import {useParams} from "react-router-dom";
import {useEffect} from "react";

const JournalShow = () => {
  const { id } = useParams();
  useEffect(() => {
  }, []);
  return (
    <section className="section Journal" >
      <p>{id}</p>
    </section>
  )
}

export default JournalShow
