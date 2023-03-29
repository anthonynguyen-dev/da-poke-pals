import React from "react";
import "./pages.css"

function Signtest() {

    // HERE IS WHERE THE JWT STUFF WILL GO

    return (
        <main>
            <div>
                <div>
                    <h4>Sign Up</h4>
                    <div className="card-body">
                        <form>
                            <input
                                placeholder="Your username"
                                name="username"
                                type="text"
                            />
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

export default Signtest;