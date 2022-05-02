import React from 'react';

const Login = () => {
    return (
        <div className="bg-[url('/src/images/equipemnt-homepage-background.png')]">
            <h2 className='text-center py-8 text-lime-500 font-bold text-6xl font-rajdhani'>Please Login</h2>
            <form>
                <input type="email" name="email" placeholder='Enter Your Email' required />
                <br />
                <input type="password" placeholder='Enter Your Password' />
                <br />
                <input type="submit" value="login" />
            </form>
        </div>
    );
};

export default Login;