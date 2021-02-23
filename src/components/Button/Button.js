function Button(props) {
  const classes = props.className || null;
  const text = props.children || [];

  function handleClick(data) {
    console.log("CIAO AMICCO");
  }

  return (
    <button className={classes} type="button" onClick={handleClick}>
      {text.map((item) => {
        return item;
      })}
    </button>
  );
}

export default Button;
