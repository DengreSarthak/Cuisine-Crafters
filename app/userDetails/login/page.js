"use client";
import Link from "next/link";
import classes from "./page.module.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const LoginHandler = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            window.location.href = "/userDetails/profile";
        } catch (error) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>
                {loading ? "Processing" : "LogIn"}
            </h1>
            <hr></hr>
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
                type="password"
                value={user.password}
                placeholder="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className={classes.input}
            />
            <button onClick={LoginHandler} className={classes.button}>
                Login
            </button>
            <Link href="/userDetails/signup" className={classes.link}>
                Visit SignUp Page
            </Link>
        </div>
    );
}
