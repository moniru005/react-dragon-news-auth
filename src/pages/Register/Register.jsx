import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        
        const name = form.get('name');
        const photoUrl = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photoUrl, email, password);


        createUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
            })
            .catch(err => console.log(err))

    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="hero w-2/5 mx-auto">
                <div className="hero-content w-full flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Please Register!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#403F3F] rounded-md text-white">Register</button>
                            </div>
                        </form>

                    </div>
                    <p>Already have an account? Please <Link to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;