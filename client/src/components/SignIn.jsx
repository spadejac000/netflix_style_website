import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './css/signinpage.css';

const SignIn = () => {
  return (
    <Form className="sign-in-form">
      <h1 className="form-title">Sign In</h1>
      <FormGroup>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      <Button className="btn-primary" style={{width: '100%'}}>Sign In</Button>
      <FormGroup  className="remember" check>
        <Label check>
          <Input type="checkbox" />{' '}
          Remember Me
        </Label>
      </FormGroup>
      <a href="">Sign Up</a>
    </Form>
  )
}

export default SignIn;