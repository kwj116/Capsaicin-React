import { Link } from "react-router-dom";
import styles from "../styles/Reservation.module.css";

function Reservation() {
  const upload = document.querySelector("#deu");
  console.log(upload);

  function onClick(e) {
    alert(".gcode 형식의 파일을 업로드 바랍니다");

    upload.innerText = `${e.target.value}`;
  }
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
          <Link
            to="/login"
            style={{ color: "black", textDecoration: "none", fontSize: "20px" }}
          >
            <strong>프린터실</strong>
          </Link>
          |
          <Link
            to="/login"
            style={{ color: "black", textDecoration: "none", fontSize: "20px" }}
          >
            <strong>자료실</strong>
          </Link>
          |
          <Link
            to="/login"
            style={{ color: "black", textDecoration: "none", fontSize: "20px" }}
          >
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
        <h1 style={{ textAlign: "center" }}>예약</h1>
        <img className={styles.img} src="img/프린터(예약Pg).png"></img>
        <div className={styles.container}>
          N번 프린터
          <br></br>
          <input
            className={styles.upload}
            type="file"
            accept="image/gcode, image/gcode, image/gcode"
            onClick={((e) => console.log(e), onClick)}
          />
          <img className={styles.지코드} src="img/gcode.png"></img>
          <div className={styles.대기자명단}>
            대기자 명단 :
            <div className={styles.대기자박스}>
              <hr id="deu"></hr>
              <br></br>
              <hr></hr>
              <br></br>
              <hr></hr>
            </div>
          </div>
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

export default Reservation;
