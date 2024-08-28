import "./Login.css";
import fbImg from "../../assets/Images/Group 44.svg";
import ggImg from "../../assets/Images/png-transparent-google-logo-google-text-trademark-logo-removebg-preview 1.svg";
// import apImg from "../../assets/Images/Group 42.svg";
import backImg from "../../assets/Images/ep_back.svg" 
import { useState } from "react";
import SignIn from "./SignIn";
import ForgetPassword from "./ForgetPassword";


  


const Login = ({cancelSignin}) => {

    const [formData, setFormData] = useState({
      email: "",
      password: "",
      }) 
    
    
      const [errors, setErrors] = useState({})
    
      const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
          ...formData, [name] : value
        })
      }
    
        // Toggle password
    
    
      const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if(!formData.email.trim()) {
          validationErrors.email = "email is required"
        } else if(!/\S+@\S+\.\S+/.test(formData.email)){
           validationErrors.email = "email is not valid"
        }



        
    
        setErrors(validationErrors)
    
        if(Object.keys(validationErrors).length === 0){
          console.log("Form submitted successfully:", { formData, password });
        }
         
    
      }
    


    const [password, setPassword] = useState("");
    const [validationMessage, setValidationMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

  const validatePassword = (password) => {
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /\d/.test(password);
    const specialCharCriteria = /[!@#$%^&*]/.test(password);

    if (!lengthCriteria) {
      return "Password must be at least 8 characters long.";
    }
    if (!uppercaseCriteria) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!lowercaseCriteria) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!numberCriteria) {
      return "Password must contain at least one number.";
    }
    if (!specialCharCriteria) {
      return "Password must contain at least one special character (!@#$%^&*).";
    }

    // return 'Password is valid!';
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setValidationMessage(validatePassword(newPassword));
  };


  const [signin, setSignin] = useState(false);

	const toggleSignin = () => {
		setSignin(!signin);
    cancelSignin
	};

  const [forgetpassword, setForgetpassword] = useState(false);

	const toggleForgetpassword = () => {
		setForgetpassword(!forgetpassword);
	};




  return (
    <div>
        <div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    onClick={cancelSignin}
    >
      <div className="login_container"
      onClick={(e) => e.stopPropagation()}
      >
      <div className="login_mobile" >
      <p onClick={cancelSignin}  className="mobile md:flex items-center gap-0 text-white"> <img src={backImg }  /> Sign in</p>
      </div>

        <div className="overlay" onClick={cancelSignin} ></div>
        <div className="login_content">
          <h3>Sign in or create an account</h3>
          <form className="login_form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="errors">{errors.email}</span>} 

            <div>
            <label htmlFor="password">Password</label>
          <br />
          <div className="passcon">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Enter a password"
              onChange={handlePasswordChange}
            />
            <span onClick={toggleShowPassword} className="showPassword">
              {showPassword ? "❌" : "👁️"}
            </span>
          </div>
            <a onClick={toggleForgetpassword} className="text-[11px] text-[#55bfea] float-right mt-2 cursor-pointer">Forgotten your password?</a>
          <span className="password_errors">{validationMessage}</span>
          <br />
            </div>
          </form>
          <div className="loginBtn">
            <button type="submit"onClick={handleSubmit}>Signin</button>
          </div>
          <div className="createAccount">
            <button type="submit" onClick={toggleSignin} >Create account</button>
          </div>
          <p className="altlogin">Or signin with</p>
          <div className="loginsocialIcons">
            <div className="loginicon">
              <img src={fbImg} alt="" />
              <p>Facebook</p>
            </div>
            <div className="loginicon">
              <img src={ggImg} alt="" />
              <p>Google</p>
            </div>

          </div>
          <p className="logintext">

            By signing in or creating an account, you agree with our{" "}
            <a href="" target="_blank"  className="text-[#55bfea]">
              Terms & conditions and Privacy statement
            </a>{" "}
            and{" "}
            <a href="" target="_blank" className="text-[#55bfea]">
              Privacy statement
            </a>
          </p>
        </div>
      </div>
      {signin && <SignIn cancelSignin={toggleSignin} /> }
      {forgetpassword && <ForgetPassword toggleForgetpassword = {toggleForgetpassword} /> }
    </div>

    </div>
  )
}

export default Login