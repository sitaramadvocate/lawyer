const PrevArrow=(props)=>{
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#fff" }}
        onClick={onClick}
      />
    );
}
export default PrevArrow;