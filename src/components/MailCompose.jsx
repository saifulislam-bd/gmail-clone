import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "./redux/appSlice";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.js";

const MailCompose = () => {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "emails"), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      createdAt: serverTimestamp(),
    });
    dispatch(setOpen(false));
    setFormData({
      to: "",
      subject: "",
      message: "",
    });
  };

  const open = useSelector((state) => state.appSlice.open);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}
    >
      <div className="flex justify-between px-3 py-2 bg-[#f2f6fc] rounded-t-md">
        <h1>New Message</h1>
        <div
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
          onClick={() => dispatch(setOpen(false))}
        >
          <RxCross2 size="20px" />
        </div>
      </div>
      <form
        action=""
        className="flex flex-col p-3 gap-2"
        onSubmit={submitHandler}
      >
        <input
          value={formData.to}
          name="to"
          type="text"
          placeholder="To"
          onChange={changeHandler}
          className="outline-none py-1"
        />
        <input
          value={formData.subject}
          name="subject"
          type="text"
          placeholder="Subject"
          onChange={changeHandler}
          className="outline-none py-1"
        />
        <textarea
          name="message"
          value={formData.message}
          cols={"30"}
          rows={"10"}
          onChange={changeHandler}
          className="outline-none py-1"
        ></textarea>
        <button
          type="submit"
          className="bg-[#0B57D0] rounded-full w-fit px-4 text-white font-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default MailCompose;
