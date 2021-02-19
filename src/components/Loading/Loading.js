function Loading() {
  return (
    <div className="text-center">
      <div
        className="spinner-border text-dark pt-6"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
