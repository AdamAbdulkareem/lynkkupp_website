/* eslint-disable react/prop-types */
import "./SignIn.css";
import fbImg from "../../assets/Images/Group 44.svg";
import ggImg from "../../assets/Images/png-transparent-google-logo-google-text-trademark-logo-removebg-preview 1.svg";
import backImg from "../../assets/Images/ep_back.svg" 
import { useState } from "react";
import Password from "./Password";


const SignIn = ({cancelSignin}) => {
  const [formData, setFormData] = useState({
    email: ''
  }) 


  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, [name] : value
    })
  }

    // Toggle password
  const [signin, setSignin] = useState(false)

  const togglePassword = () => {
		setSignin(!signin);
	};



  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.email.trim()) {
      validationErrors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
       validationErrors.email = "email is not valid"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0)
      setSignin(!signin)

  }


  return (
    <div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    onClick={cancelSignin}
    >
      <div className="singin_container"
      onClick={(e) => e.stopPropagation()}
      >
       
      <div className="login_mobile" >
      <p onClick={cancelSignin}  className="mobile md:flex items-center gap-0 text-white"> <img src={backImg }/> Sign in</p>
      </div>

        {/* <div className="overlay" onClick={cancelSignin} ></div> */}
        <div className="signin_content">
          <h3>Create an account </h3>
          <form className="signin_form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <br />
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              onChange={handleChange}
            />
            {errors.email && <span className="errors">{errors.email}</span>} 
          </form>
          <div className="signinBtn">
            <button type="submit" onClick={handleSubmit}>Continue with email</button>
          </div>
          <p className="altsignin">Or login with</p>
          <div className="socialIcons">
            <div className="icon">
              <img src={fbImg} alt="" />
              <p>Facebook</p>
            </div>
            <div className="icon">
              <img src={ggImg} alt="" />
              <p>Google</p>
            </div>
          </div>
          <p className="text">
            {" "}
            By signing in or creating an account, you agree with our{" "}
            <a href="" target="_blank" className="text-[#55bfea]">
              Terms & conditions and Privacy statement
            </a>{" "}
            and{" "}
            <a href="" target="_blank" className="text-[#55bfea]">
              Privacy statement
            </a>
          </p>
        </div>
      </div>
      {signin && <Password cancelPassword = {togglePassword} /> }
    </div>
  );
};

export default SignIn;