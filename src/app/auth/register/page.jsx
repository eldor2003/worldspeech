import Link from "next/link";
import React from "react";

import "../../../styles/register.css";
import RegisterContent from "@/components/registerContent";
import RegisterPasswordContent from "@/components/registerPasswordContent";
import RegisterUsernameContent from "@/components/registerUsernameContent";

const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="register__block">
          <div className="register__block--content">
            <div className="register__block--content__logo">
              <img src="/logo.svg" alt="logo" />
              <span>WorldspeechAI</span>
            </div>

            {/* =========== */}

            <RegisterContent />

            {/* ============ */}

            <div className="offer__and__policy">
              <p>Регистрируясь, вы соглашаетесь с </p>
              <p>
                <Link href={"/offer"}>Офертой</Link>
                <span> и </span>

                <Link href={"/policy"}>Политикой конфиденциальности</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
