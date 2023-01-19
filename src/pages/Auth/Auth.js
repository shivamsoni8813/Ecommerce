import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar/Navbar';
import "./Auth.css"
import { AxiosInstance } from '../../Util/AxiosInstace';
import { forsignin, forsignup } from '../../Api/Auth/idx';
import { createCart } from '../../Api/Auth/Cart/cartIndex';
function Auth() {

    const [signup, setsignup] = useState(false)
    const [username, setuserName] = useState("")
    const [password, setpass] = useState("")
    const [email, setemail] = useState("")
    const [signupSuccess, setsignupSuccess] = useState(false)
    const [authres , setauthres] = useState("")

    // toggler if user click on signup then it sets true as setsignup

    const toggleHandler = () => {
        setsignup(!signup)
    }

    // sign handle for getting user signin
    
    const signInHandler = async () => {
        let userInfo = { username, password }
        localStorage.setItem("name",username)

        console.log(userInfo)
        try {
            let {data} = await forsignin(userInfo)
            console.log(data)
            localStorage.setItem("token", data.token)
            await createCart()
            window.location.href = '/'
            console.log("signed In")
        } catch (error) {
            console.log(error)
            console.log("error")
        }
        console.log("clicked")
    }


    // signup handle for getting user sign up for signin



    const signUpHandler = async ()=>{
        let userInfo = {username, password, email}
        localStorage.setItem("signupname", username)
        localStorage.setItem("signuppass", password)
        localStorage.setItem("signupemail",email)
        if (!username || !password || !email) {
            alert("please filled all inputs")
            setsignupSuccess(false)
            return
        }
        try {
            let {data} = await forsignup(userInfo)
            alert("signed up")
            console.log(data)
            setsignupSuccess(true)
            localStorage.setItem("userId" , data.id)
            setauthres(data.id)
        } catch (error) {
            console.log(error)
            setauthres(error.response.data.message)
        }
    }
    useEffect(()=>{
        signInHandler()
    },[])
    const renderComponent = () => {
        return (
            <>
                <Navbar />
                <div className="login">
                    <div className="container">
                        <div className="row">
                            <h2 className='home-title text-center'>Welcome To Ecom...</h2>
                            <div className="loginPage ">
                                <h3 className='text-center'>{signup ? "Sign-Up" : "Sign In"}</h3>
                                <div className="input-group ">
                                    <input type="text" className='form-control'
                                         placeholder='Enter UserName' value={username} onChange ={(e) => setuserName(e.target.value)} autoFocus autoComplete='off' />
                                </div>
                              
                                {signup && <div className="input-group">
                                    <input type="Email" value={email} onChange = {(e)=>setemail(e.target.value)} className='form-control' placeholder='Enter Email' autoFocus autoComplete='off' />
                                </div>}
                              
                                <div className="input-group">
                                    <input type="password" name='password' value={password} onChange={(e)=>setpass(e.target.value)}  className='form-control' placeholder='Enter password'  autoFocus  />
                                </div>
                              
                                <div className="input-group">
                                    <input type="submit" className=' form-control btn btn-primary'
                                        onClick={signup ? signUpHandler : signInHandler} value={signup ? "SignUp" : "SignIn"} />  
                                </div>
                                <div className="auth-msg text-center" onClick={toggleHandler}>
                                    {signup ? "You Already Havn An Account ? LogIn" : "Don't Have An Acount ? Sign Up"}
                                </div>
                                {authres && <div className={signupSuccess ?"auth-reponse text-info text-center" : "auth-response text-danger text-center"}>{authres}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return (
        renderComponent()
    )
}

export default Auth
