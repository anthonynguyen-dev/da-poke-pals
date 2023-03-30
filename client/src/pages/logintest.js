import React from "react";
import "./pages.css"

function Logintest() {

    // HERE IS WHERE THE JWT STUFF WILL GO

    return (

        <main >
            <div className="login">
                <div className="container">
                    <form>
                        <p>Login</p>
                        <input
                            placeholder="Your email"
                            name="email"
                            type="email"
                            class="input"
                        /><br />
                        <input
                            placeholder="******"
                            name="password"
                            type="password"
                            class="input"
                        /><br />
                        <p>Sign Up</p>
                        <input
                            placeholder="Your username"
                            name="username"
                            type="text"
                            class="input"
                        /><br />
                        <input
                            placeholder="Your email"
                            name="email"
                            type="email"
                            class="input"
                        /><br />
                        <input
                            placeholder="******"
                            name="password"
                            type="password"
                            class="input"
                        /><br />
                        <button
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </main>
    );
}

export default Logintest;