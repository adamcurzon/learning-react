const TextLeftImageRight = ({
  title,
  content,
  image,
  backgroundClass,
  align,
}) => {
  return (
    <section className={"w-100 p-tb-main-2 p-r " + backgroundClass}>
      <div
        className={
          "flex flex-jc-sb mw-container center flex-ai-c flex-g-20 " +
          (align === "right" ? "flex-d-rr" : "")
        }
      >
        <div className="t-left mw-50">
          <h2 className="fs-48 p-m-reset">{title}</h2>
          <p className="c-grey lh-30">{content}</p>
        </div>
        <div className="mw-50">
          <img className="br-40 mw-300" alt={image} src={image} />
        </div>
      </div>
    </section>
  );
};

export default TextLeftImageRight;
