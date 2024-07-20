import { useEffect } from "react";

interface AlertProps {
  type: string;
  msg: string;
  removeAlert: () => void;
  list: List[];
}

interface List {
  id: string;
  title: string;
}

const Alert = ({ type, msg, removeAlert, list }: AlertProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [list, removeAlert]);

  return (
    <p className={`${type === "success" ? "bg-green-500" : "bg-red-500"}`}>
      {msg}
    </p>
  );
};

export default Alert;
