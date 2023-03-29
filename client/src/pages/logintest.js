import React from "react";
import "./pages.css"

function Logintest() {

        // HERE IS WHERE THE JWT STUFF WILL GO

    return (
        <main >
            <div>
                <div>
                    <h4>Login</h4>
                    <div>
                        <form>
                            <input
                                placeholder="Your email"
                                name="email"
                                type="email"
                            />
                            <input
                                placeholder="******"
                                name="password"
                                type="password"
                            />
                            <button
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Logintest;