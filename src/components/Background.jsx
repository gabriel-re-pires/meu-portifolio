const Background = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

      {/* GRID */}
      <div className="grid-bg opacity-20" />

      {/* GLOW */}
      <div className="glow-bg" />

    </div>
  );
};

export default Background;
