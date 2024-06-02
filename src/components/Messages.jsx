import { useEffect } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "./redux/appSlice";

const Messages = () => {
  const dispatch = useDispatch();
  const { allEmail } = useSelector((state) => state.appSlice);

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmail = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setEmails(allEmail));
    });

    //cleanup
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <div>
      {allEmail &&
        allEmail?.map((email, i) => <Message email={email} key={i} />)}
    </div>
  );
};

export default Messages;
