interface Props {
  children: string;
  color?: "primary" | "success" | "danger";
  onClick: () => void;
}

function Button({ children, color = "success", onClick }: Props) {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
