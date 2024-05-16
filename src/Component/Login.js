import style from "../assets/css/style.css"
import tree from "../assets/Images/tree.png"
import Leaf from "../assets/Images/Leaf.png"
export default function Login()
{
    return<>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6">
                <div className="login-side-view">
                    <img src={tree}/>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="login-form">
                    <form>
                        <div className="text-center Leaf">
                            <img src={Leaf}/>
                            <span>Leaf</span>
                            <h4>Create Account</h4>
                        </div>
                            <div className="input-field">
                            <i class="fa fa-user-o" aria-hidden="true"></i>
                            <label>Full Name</label>
                                <input type="text" placeholder="Enter Full Name"/>
                            </div>
                            <div className="input-field">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                            <label>Email</label>
                                <input type="email" placeholder="Enter Your Email"/>
                            </div>
                            <div className="input-field">
                            <i class="fa fa-key" aria-hidden="true"></i>
                            <label>Password</label>
                                <input type="password" placeholder="Enter Your Password"/>
                            </div>
                            <div className="text-center login-btn">
                                <button>Sign-Up</button>
                                <h5>- OR -</h5>
                            </div>
                            <div className="icons text-center">
                                <a href="">
                                <i class="fa fa-google" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                <i class="fa fa-apple" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className="text-center text-heading">
                                <p>Already have an account?<b>Login</b></p>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
}