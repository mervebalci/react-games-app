import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "success" | "danger";
  onClick: () => void;
}

function Button({ children, color = "success", onClick }: Props) {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
