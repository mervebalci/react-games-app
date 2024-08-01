import { ReactNode } from "react";

interface Props {
  children: ReactNode; // defining the children as ReactNode allows you to pass a string or even more complex structures like HTML content.
  onClose: () => void;
}

function Alert({ children, onClose }: Props) {
  return (
    <div className="alert alert-warning alert-dismissible">
      {children}!
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
