import "./view.css";

export const View = ({
  children,
  className,
  id,
  style,
  as: Element = "div",
  noIndex,
}) => {
  return (
    <Element
      id={id}
      className={`view-wrapper ${className ?? ""} ${
        noIndex ? "no-index" : "index"
      }`}
      style={style}
    >
      {children}
    </Element>
  );
};
