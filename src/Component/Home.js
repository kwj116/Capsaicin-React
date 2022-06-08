import { Link } from "react-router-dom";
import "../styles/Home.css";
function Home() {
  return (
    <div className="Header">
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
          <Link
            to="Login.js"
            style={{ textDecoration: "none", color: "white" }}
          >
            로그인
          </Link>
          <span style={{ color: "white" }}>|</span>
          <Link to="#" style={{ textDecoration: "none", color: "white" }}>
            English
          </Link>
        </span>
        <br></br>
        <Link to="Home.js">
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
            to="Login.js"
            style={{ color: "black", textDecoration: "none" }}
          >
            <strong>프린터실</strong>
          </Link>
          |
          <a href="Login.js" style={{ color: "black", textDecoration: "none" }}>
            <strong>자료실</strong>
          </a>
          |
          <a href="Login.js" style={{ color: "black", textDecoration: "none" }}>
            <strong>게시판</strong>
          </a>
        </span>
        <br></br>
        <div
          style={{
            backgroundColor: "#c4c0c0",
            width: "1920px",
            height: "2px",
          }}
        ></div>
        <table className="table">
          <td>
            <a className="img" href="Login.js">
              <div className="scale">
                <img src="img/정보관.PNG" id="info"></img>
              </div>
            </a>
          </td>
          <td>
            <a className="img" href="Login.js">
              <div className="scale">
                <img src="img/지천관.jpg" id="jicheon"></img>
              </div>
            </a>
          </td>
          <td>
            <a className="img" href="Login.js">
              <div className="scale">
                <img src="img/건윤관.jpg" id="geon"></img>
              </div>
            </a>
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
        <table className="div">
          <tr>
            <td id="td1">
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                공지사항
              </a>
            </td>
            <td id="td1">
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                공지사항
              </a>
            </td>
            <td id="td1">
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                공지사항
              </a>
            </td>
          </tr>
        </table>
        <br></br>
        <div className="div2">
          공지사항
          <div id="line2"></div>
        </div>
        <div className="footer">
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
            관리자:010-2597-1764 | kwj116@hanmail.net{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
