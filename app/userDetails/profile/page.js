"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast"
import { useEffect, useState } from "react";
import classes from "./page.module.css";

export default function ProfileId() {
	const router = useRouter();
	const [id, setId] = useState("Nothing");
	const [username, setUsername] = useState("Nothing");
	const [email, setEmail] = useState("Nothing");

	const logout = async () => {
		try {
			await axios.get("/api/users/logout");
			toast.success("Logout sucessful");
			window.location.href = "/userDetails/login";
		} catch (error) {
			console.log(error.message);
			toast.error(error.message);
		}
	};

	// const getUserDetails = async() => {
	//     const res = await axios.get('/api/users/activeUser');
	//     console.log(res.data);
	//     setData(res.data.data.username);
	// }

	useEffect(() => {
		const fetchUserDetails = async () => {
			try {
				const res = await axios.get("/api/users/activeUser");
				setId(res.data.data._id);
				setUsername(res.data.data.username);
				setEmail(res.data.data.email);
			} catch (error) {
				console.error(error);
				toast.error("Failed to fetch user details");
			}
		};
		fetchUserDetails();
	}, []);

	return (
		<main className={classes.container}>
			<div className={classes.profileContainer}>
				<h1 className={classes.heading}>My Profile</h1>
				<div className={classes.info}>
					<h2>Name: {username}</h2>
					<h2>Email: {email}</h2>
					<h2>User-Id: {id}</h2>
				</div>
			</div>
			<button className={classes.logoutButton} onClick={logout}>
				Log Out
			</button>
		</main>
	);
}
