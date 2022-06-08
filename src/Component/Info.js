import { Component } from "react";
import "../styles/Login.css";
function Info() {
  return (
    <div>
      <br />
      <div className="deu_logo">
        <a href="home.html">
          <img
            style={{
              width: "320px",
              textAlign: "center",
              filter: { dropShadow: "4px 4px 2px gray" },
            }}
            src="img/3d.png"
          />
        </a>
        <br />
      </div>
      <div id="all">
        <div id="container">
          <h3
            id="login_text"
            style={{
              textShadow: "1px 1px 2px black",
              paddingLeft: "50px",
              marginTop: "25px",
            }}
          >
            로그인
          </h3>
        </div>
        <div id="container2">
          <img id="login_image" src="img/login.png"></img>
          <form id="logInForm">
            <div style={{ position: "relative", top: "25px" }}>
              <div style={{ position: "absolute" }}>
                <input
                  type="text"
                  placeholder="아이디를 입력하세요."
                  id="id"
                ></input>
                <input
                  type="text"
                  placeholder="비밀번호를 입력하세요."
                  id="password"
                ></input>
              </div>
              <input type="submit" value="로그인" id="submit"></input>
            </div>
          </form>
        </div>
        <div id="container" />
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
            관리자:010-2597-1764 | kwj116@hanmail.net
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
