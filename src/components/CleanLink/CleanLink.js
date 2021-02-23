function CleanLink(props) {
  const classes = props.className || "";
  const text = [props.children] || [];
  const target = props.target || "";
  const rel = props.rel || "";
  const href = props.href || "";

  return (
    <a
      className={"text-decoration-none text-reset " + classes}
      href={href}
      target={target}
      rel={rel}
    >
      {text.flatMap((item) => {
        return item;
      })}
    </a>
  );
}

export default CleanLink;
