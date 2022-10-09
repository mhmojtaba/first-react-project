import { useState } from "react";
import Btn from "../btn/btn";
import "./loginpage.css";

const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const phoneRegex = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;

const LoginPage = () => {
  const [inputval, setInputval] = useState("");
  const [errorshow, setErrorshow] = useState("");
  function validation() {
    const emailtest = emailRegex.test(inputval);
    const phonetest = phoneRegex.test(inputval);
    if (!(emailtest || phonetest)) {
      setErrorshow("مقدار صحیحی وارد کنید");
    } else {
      setErrorshow("صحیح است");
    }
  }
  //console.log(inputval);
  return (
    <div
      className="w-100 h-100 d-flex justify-content-center align-items-center"
      dir="rtl"
    >
      <div className="w-25 border rounded-8 d-flex flex-column justify-content-start align-items-center p-5">
        <div className="w-50 h-auto">
          <img
            className="w-100 h-100"
            src="https://www.digikala.com/statics/img/svg/logo.svg"
            alt="DigiKalaLogo"
          />
        </div>
        <h1 className="w-100 mt-4 signuptitle">ورود | ثبت نام</h1>
        <p className="hitext w-100 mt-4">سلام!</p>
        <p className="hitext w-100 mt-1">
          لطفا شماره موبایل یا ایمیل را وارد کنید
        </p>
        <input
          value={inputval}
          onChange={(e) => setInputval(e.target.value)}
          className="w-100 px-4 rounded mt-4 inputemail"
          type="text"
          name=""
          id=""
        />
        <small className="w-100 mt-3 errorshow">{errorshow}</small>
        <Btn
          onClick={validation}
          className="btn btn-danger w-100 mt-4 d-flex justify-content-center align-items-center"
          text="ورود"
        />
        <p className="w-100 mt-3 text-caption">
          ورود شما به معنای پذیرش
          <a className="mx-2 d-inline-block" href="#">
            شرایط دیجی‌کالا{" "}
          </a>
          و
          <a className="mx-2 d-inline-block" href="#">
            قوانین حریم‌خصوصی{" "}
          </a>
          است
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
