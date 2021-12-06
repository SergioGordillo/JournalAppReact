import React from 'react'

export const LoginScreen = () => {
    return (
        <>
            <h3>Login</h3>

            <form>
                <input type="text"
                       placeholder="Write your email here"
                       name="email"
                />
                <input type="password"
                       placeholder="Write your password here"
                       name="email"
                />

                <button type="submit"
                >
                    Login
                </button>

                <hr/>

                Google

            </form>
        </>
    )
}
