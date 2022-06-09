import { Link } from "react-router-dom";
import styles from "../styles/Info.module.css";
function Geon() {
  function Print() {
    return (
      <table className={styles.printer}>
        <thead>
          <tbody>
            <tr>
              <Link to="/reservation">
                <img src={printer}></img>
                <img src={printer}></img>
                <img src={printer}></img>
                <img src={printer}></img>
                <img src={printer}></img>
                <img src={printer}></img>
              </Link>
            </tr>
            <tr>
              <Link to="/reservation">
                <img src={printer}></img>
                <img src={printer}></img>
                <img src={printer}></img>
                <img src={printer}></img>
                <img src={printer}></img>
                <img src={printer}></img>
              </Link>
            </tr>
            <tr>
              <Link to="/reservation">
                <img src={printer}></img>
                <img src={printer}></img>
              </Link>
            </tr>
          </tbody>
        </thead>
      </table>
    );
  }
  const printer = "img/프린터.png";
  return (
    <div className={styles.Header}>
      <div>
        <span
          style={{
            display: "block",
            textAlign: "right",
            paddingRight: "50px",
            paddingTop: "10px",
            fontSize: "13px",
          }}
        >
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            로그인
          </Link>
          <span style={{ color: "white" }}>|</span>
          <Link to="#" style={{ textDecoration: "none", color: "white" }}>
            English
          </Link>
        </span>
        <br></br>
        <Link to="/">
          <img
            style={{
              width: "280px",
              filter: { dropShadow: "3px 3px 2px gray" },
              verticalAlign: "middle",
            }}
            src="img/3d.png"
          />
        </Link>
        <span
          style={{ paddingLeft: "1250px", fontSize: "25px", color: "gray" }}
        >
          <Link to="/login" style={{ color: "black", textDecoration: "none" }}>
            <strong>프린터실</strong>
          </Link>
          |
          <Link to="/login" style={{ color: "black", textDecoration: "none" }}>
            <strong>자료실</strong>
          </Link>
          |
          <Link to="/login" style={{ color: "black", textDecoration: "none" }}>
            <strong>게시판</strong>
          </Link>
        </span>
        <div
          style={{
            marginTop: "10px",
            backgroundColor: "#c4c0c0",
            width: "1920px",
            height: "2px",
          }}
        ></div>
        <br></br>
        <h1 style={{ textAlign: "center" }}>건윤관</h1>

        <div
          style={{
            backgroundColor: "black",
            width: "1476px",
            position: "relative",
            left: "223px",
            height: "2px",
          }}
        ></div>
        <div className={styles.wrap}>
          <Print></Print>
        </div>

        <div className={styles.footer}>
          <span
            style={{
              display: "block",
              color: "rgb(187, 185, 185)",
              fontWeight: "400",
              fontSize: "13px",
              paddingTop: "15px",
              paddingLeft: "20px",
            }}
          >
            관리자:010-2597-1764 | kwj116@hanmail.net
          </span>
        </div>
      </div>
    </div>
  );
}

export default Geon;
