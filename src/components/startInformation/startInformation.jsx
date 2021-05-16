import { toast } from "react-toastify";

const StartInformation = () => {
  return toast.dark(
    "We highly recommend you to go through the “learn more” ( in bottom right corner ) content before visualizing data structure and algorithm.",
    { autoClose: 9000 }
  );
};

export default StartInformation;
