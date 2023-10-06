const TextRightImageLeft = ({ title, content, image, backgroundClass }) => {
  return (
    <>
      <div className={"w-100 p-tb-main-2 " + backgroundClass}>
        <div className="flex flex-jc-sb mw-container center flex-ai-c flex-g-20">
          <div className="mw-50">
            <img className="br-40 mw-300" src={image} />
          </div>
          <div className="t-left t-right mw-50">
            <h2 className="fs-48 p-m-reset">{title}</h2>
            <p className="c-grey lh-30">{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextRightImageLeft;
