
import React from "react";
import "./login.css"
const Login = () => {
    
  return (
    <div>
        <div class="form">
            <div class="head">
                <img src="../logo.jpg" class="logo" alt=".."></img>
                <div class="dropdown dd">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="m.com">Sign in</a></li>
                        <li><a class="dropdown-item" href="h.com">About</a></li>
                    </ul>
                </div>
                <div class="buttons">
                    <button onclick="dispaly(this)" index="0" class="btn btn-link active">SIGN IN</button>
                    <button onclick="dispaly(this)" index="1" class="btn btn-link">ABOUT</button>
                </div>
            </div>
            <section class="formar show">
                <div class="jo">
                    <form>
                        <p class="log">login</p>
                        <p id="error"></p>
                        <div class="fild">
                            <i class="fas fa-user-alt"></i>
                            <div class="form-floating mb-3"> <input type="name" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">User Name</label> </input></div>
                            </div>
                            <div class="form-floating PassFild">
                                <i class="fas fa-key"></i> 
                                <div class="form-floating mb-3"><input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                                    <label for="floatingPassword">Password</label> </input>
                                </div>
                                <i class="fas fa-eye" onclick="myFunction()"></i>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-outline-primary" id="login">LOGIN</button>
                            </div>
                        </form>
                        <img src="../loginphoto4.jpg" class="photo" alt=".."></img>
                        
                    </div>
        </section>
        <section class="content hide cont">
            <b class="about">About System</b>
            <p>We develop a smart system to protect endangered animals,
                through a collar that the animal wears around the neck that contains a monitoring system to combat illegal poachers, 
                and also contains a system for monitoring the health of the animal.
            </p>
            <b>Objective</b>
            <p>1. Monitoring everything that happens around the animal through cameras that capture everything that happens in the animal’s surroundings </p>
            <p>2. monitor the animal’s health and physical condition such as heart rate, temperature.
                This is through some sensors that collect data</p>
            <p>3. Displayed on the interface of the website, through which all data is monitored</p>
        </section>
        </div>
    </div>
  );
};

export default Login;

