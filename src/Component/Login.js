import { Link } from "react-router-dom";
import styles from "../styles/Login.module.css";

function Login() {
  return (
    <div>
      <br />
      <div className={styles.deu_logo}>
        <Link to="/">
          <img
            style={{
              width: "320px",
              textAlign: "center",
              filter: { dropShadow: "4px 4px 2px gray" },
            }}
            src="img/3d.png"
          />
        </Link>
        <br />
      </div>
      <div className={styles.all}>
        <div className={styles.container}>
          <h3
            className={styles.login_text}
            style={{
              textShadow: "1px 1px 2px black",
              paddingLeft: "50px",
              marginTop: "25px",
            }}
          >
            로그인
          </h3>
        </div>
        <div className={styles.container2}>
          <img className={styles.login_image} src="img/login.png"></img>
          <form className={styles.logInForm}>
            <div style={{ position: "relative", top: "25px" }}>
              <div style={{ position: "absolute" }}>
                <input
                  type="text"
                  placeholder="아이디를 입력하세요."
                  className={styles.id}
                  id="id"
                ></input>
                <input
                  type="text"
                  placeholder="비밀번호를 입력하세요."
                  className={styles.password}
                  id="password"
                ></input>
              </div>
              <input
                type="submit"
                value="로그인"
                className={styles.submit}
              ></input>
            </div>
          </form>
        </div>
        <div className={styles.container} />
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

export default Login;
