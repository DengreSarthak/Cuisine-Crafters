"use client";
import Link from "next/link";
import classes from "./page.module.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignUp() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });

    const [disableButton, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (
            user.email.length > 0 &&
            user.password.length > 0 &&
            user.username.length > 0
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    const signUpHandler = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/userDetails/login");
        } catch (error) {
            console.log("signup failed", error.message);

            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const disableButtonHandler = async () => {
        console.log("Enter right details");
    };

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>
                {loading ? "Processing" : "SignUp"}
            </h1>
            <hr></hr>
            <label htmlFor="username" className={classes.label}>
                Username
            </label>
            <input
                id="username"
                type="text"
                value={user.username}
                placeholder="username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className={classes.input}
            />
            <label htmlFor="email" className={classes.label}>
                Email
            </label>
            <input
                id="email"
                type="text"
                value={user.email}
                placeholder="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className={classes.input}
            />
            <label htmlFor="password" className={classes.label}>
                Password
            </label>
            <input
                id="password"
                type="password" // Changed from "text" to "password" for security
                value={user.password}
                placeholder="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className={classes.input}
            />
            <button
                onClick={signUpHandler}
                className={
                    disableButton ? classes.disableButton : classes.button
                }
            >
                SignUp
            </button>
            <Link href="/userDetails/login" className={classes.link}>
                Visit Login Page
            </Link>
        </div>
    );
}
