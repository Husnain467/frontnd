import { useState } from "react";
import {createUser} from "../Service/api";

function Sign(){

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setUser({
            ...user, [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUser(user);
    }

    return (<div className="col-md-6" style={{display:'flex',textAlign:"center",marginLeft:'29%'}}>
        <form onSubmit={handleSubmit}>
            <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input 
                    type="email" 
                    className="form-control" 
                    id="inputEmail3" 
                    name="email" 
                    value={user.email}   
                    onChange={handleChange}
                />
                </div>
            </div>
            <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input 
                    type="password" 
                    className="form-control" 
                    id="inputPassword3"
                    name="password" 
                    value={user.password}
                    onChange={handleChange}
                />
                </div>
            </div>
            
            <button type="submit" className="btn btn-primary offset-2">Sign in</button>
            </form>
    </div>)
}

export default Sign;