import logo from './logo.svg';
import './App.css';
import{button, form, formGroup, Label, Input}
from 'reactstrap';
import{FacebookLoginButton} from 'react-social-login-buttons';

function App() {
  return (
    <form className="login-form">
      <h1>
        <span className="font-weight-bold">mywebsite</span>.com
        </h1>
        <h2 className="text-center">welcome</h2>
        <formGroup>
          <label>Email</label>
          <Input type="email"placeholder="Email"/>
          </formGroup>
          <formGroup>
          <label>Password</label>
          <Input type="password"placeholder="Password"/>
          </formGroup><br></br>
          <button className= "btn-lg btn-dark btn-block">
            Log in
            </button>
            <FacebookLoginButton className= "mt-3 mb-3"/>
            <div className="text-center">
              <a href="/sign-up">Sign Up</a>
              <span className="p-2">|</span>
              <a href="/forgot password">Forgot Password</a>
            </div>
    </form>
  );
}

export default App;
