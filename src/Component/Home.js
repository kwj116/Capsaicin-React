import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

function Home() {
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
        <br></br>
        <div
          style={{
            backgroundColor: "#c4c0c0",
            width: "1920px",
            height: "2px",
          }}
        ></div>
        <table className={styles.table}>
          <td>
            <Link to="/login" className={styles.img}>
              <div className={styles.scale}>
                <img src="img/정보관.PNG" className={styles.info}></img>
              </div>
            </Link>
          </td>
          <td>
            <Link to="/login" className={styles.img}>
              <div className={styles.scale}>
                <img src="img/지천관.jpg" className={styles.jicheon}></img>
              </div>
            </Link>
          </td>
          <td>
            <Link to="/login" className={styles.img}>
              <div className={styles.scale}>
                <img src="img/건윤관.jpg" className={styles.geon}></img>
              </div>
            </Link>
          </td>
        </table>
        <div
          style={{
            backgroundColor: "#c4c0c0",
            width: "1920px",
            height: "2px",
          }}
        ></div>
        <br></br>
        <table className={styles.div}>
          <tr>
            <td className={styles.td1}>
              <Link to="#" style={{ textDecoration: "none", color: "black" }}>
                공지사항
              </Link>
            </td>
            <td className={styles.td1}>
              <Link to="#" style={{ textDecoration: "none", color: "black" }}>
                공지사항
              </Link>
            </td>
            <td className={styles.td1}>
              <Link to="#" style={{ textDecoration: "none", color: "black" }}>
                공지사항
              </Link>
            </td>
          </tr>
        </table>
        <br></br>
        <div className={styles.div2}>
          공지사항
          <div className={styles.line2}></div>
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

export default Home;
