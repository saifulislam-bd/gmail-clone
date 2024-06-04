import { signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/appSlice";

const Login = () => {
  const dispatch = useDispatch();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch(
        setUser({
          displayName: result.user.displayName,
          email: result.user.email,
          photoUrl: result.user.photoURL,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
      <div className="flex flex-col p-8 bg-white gap-3 rounded-md">
        <h1 className="text-center text-xl font-medium mb-5">Sign in</h1>
        <GoogleButton onClick={signInWithGoogle} />
      </div>
    </div>
  );
};

export default Login;
