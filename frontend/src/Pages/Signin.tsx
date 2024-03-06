import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signInBody } from '@sincerelyyyash/common-app';
import backgroundImage from '../assets/bg.jpg'; // Import the background image

function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // const handleSignIn = async ((e: ChangeEvent<HTMLInputElement>)) => {
    //     try {
    //       const requestBody = {
    //         username,
    //         password
    //       };
      
    //       const response = await axios.post("urlHere", requestBody);
      
    //       localStorage.setItem("token", response.data.token);
    //       navigate("/dashboard");
    //     } catch (error) {
    //       console.error('Error signing in:', error);
    //     }
    //   };

    return (
        <div className='h-screen' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <div className='flex justify-center'>
                <div className="w-full p-5 shadow-2xl lg:max-w-lg mt-10 rounded-lg font-montserrat bg-white">
                    <div className="space-y-2">
                        <div className='flex flex-col px-10 py-10 bg-white'>
                            <h3 className='flex justify-center text-black text-4xl font-bold'>
                                Sign In
                            </h3>
                            <p className='flex justify-center mt-4 text-gray-500 text-xl font-palanquin'>
                                Enter your credentials to login
                            </p>

                            <p className='mt-5 font-bold text-lg'>Email</p>
                            <input type='email' name="email" id="email" placeholder='tony@example.com'
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                                className='w-full border border-gray-300 h-10  mt-3 rounded-lg p-2'
                            />

                            <p className='mt-5 font-bold text-lg'>Password</p>
                            <input type="password" name="password" id="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                className='w-full border border-gray-300 h-10  mt-3 rounded-lg p-2'
                            />

                            <button
                                // onClick={handleSignIn}
                                className='mt-5 bg-black text-white font-bold text-xl h-12 rounded-lg'
                            >Sign In</button>
                            <div className='flex flex-row mt-4 justify-center gap-1'>
                                <p>Don't have an account?</p><button className='font-bold underline' onClick={() => {
                                    navigate("/signup")
                                }}>Sign-Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;
