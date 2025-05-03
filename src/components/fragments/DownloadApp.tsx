function DownloadApp() {
  return (
    <div className="center" style={{ overflow: "hidden", paddingBottom: "0" }}>
      <div className="bubble" style={{bottom:"-30%"}}></div>
      <div className="box appd" style={{ overflow: "hidden" }}>
        <h1>Download our App</h1>
        <p>Stay connected with all university services at your fingertips !</p>
        <a href="##" className="btn">
          Download
        </a>
      </div>
      <div className="box appImage">
        <img className="aimage" src="/icons/app.png" alt="" />
        <a href="##">
          <img className="gd" src="/icons/gd.png" alt="" />
        </a>
        <a href="##">
          <img className="apple" src="/icons/apple.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default DownloadApp;
