import toast from "react-hot-toast";

const Toast = ({ message, type }: { message: string; type: string }) => {
  return type === "success"
    ? toast.success(message)
    : type === "error"
    ? toast.error(message)
    : toast(message);
};

export default Toast;
