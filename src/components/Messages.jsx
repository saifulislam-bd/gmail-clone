import { useEffect, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "./redux/appSlice";

const Messages = () => {
  const dispatch = useDispatch();
  const { allEmail, searchText } = useSelector((state) => state.appSlice);
  const [tempEmails, setTempEmails] = useState(allEmail);

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

  useEffect(() => {
    const filteredEmails = allEmail?.filter((email) => {
      return (
        email?.subject?.toLowerCase().includes(searchText.toLowerCase()) ||
        email?.to?.toLowerCase().includes(searchText.toLowerCase()) ||
        email?.message?.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setTempEmails(filteredEmails);
  }, [searchText, allEmail]);

  return (
    <div>
      {tempEmails &&
        tempEmails?.map((email, i) => <Message email={email} key={i} />)}
    </div>
  );
};

export default Messages;
