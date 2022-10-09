const Btn = (props) => {
  return (
    <button
      {...props}
      className={props.className}
      style={{ height: "4rem", fontSize: "2rem" }}
    >
      {props.text}
    </button>
  );
};

export default Btn;
