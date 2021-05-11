import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Fade } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import Aos from "aos";
import "aos/dist/aos.css";

const FormPopUp = () => {
  const [fade, setFade] = useState(true);
  const handleClick = () => {
    setFade(!fade);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {fade ? (
        <Form data-aos="fade-right" className="login-form">
          <h1>
            <span className="font-weight-bold">Welcome</span>
          </h1>
          <FormGroup className="group">
            <Label> Email </Label>
            <Input type="email" placeholder="Email" />
          </FormGroup>
          <FormGroup className="group">
            <Label> Password </Label>
            <Input type="password" placeholder="Password" />
          </FormGroup>
          <FormGroup className="group">
            <Button onClick={handleClick} className="btn-lg btn-dak btn-block">
              Log in
            </Button>
          </FormGroup>
          <div className="login-text pt-3">
            Or continue with your social account.
          </div>
          <FacebookLoginButton onClick={handleClick} className="mt-3 mb-3" />
        </Form>
      ) : null}
    </>
  );
};

export default FormPopUp;
