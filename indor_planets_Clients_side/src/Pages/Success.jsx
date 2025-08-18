import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router";

const Success = () => {
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const tran_id = searchParams.get("tran_id");

  useEffect(() => {
    if (tran_id) {
      axios
        .get(`http://localhost:3000/success?tran_id=${tran_id}`)
        .then(res => setMessage(res.data))
        .catch(err => setMessage("Something went wrong"));
    }
  }, [tran_id]);

  return <div>{message || "Loading..."}</div>;
};

export default Success;
