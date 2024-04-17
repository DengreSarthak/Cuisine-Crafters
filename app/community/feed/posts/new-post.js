"use client";

import { sharePost } from "./../../../lib/actions";
import classes from "./new-post.module.css";
import { MealsFormSubmit } from "./../../../meals/meals/form-submit";
// import axios from "axios";
import { useFormState } from "react-dom";
// import { useEffect, useState } from "react";

export default function NewPost() {

	// const [username, setUsername] = useState(" ");
	// const [email, setEmail] = useState(" ");
	
	// useEffect(() => {
	// 	const fetchUserDetails = async () => {
	// 		try {
	// 			const res = await axios.get("/api/users/activeUser");
	// 			setUsername(res.data.data.username);
	// 			setEmail(res.data.data.email);
	// 			console.log("new-post entry");
	// 			console.log(res.data.data.username);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};
	// 	fetchUserDetails();
	// }, []);

	const postClickHandler=() => {
		window.location.href = "/community/feed";
	}

	const [state, formAction] = useFormState(sharePost);
	

	return (
		<>
			<form className={classes.feedForm} action={formAction}>
				<div className={classes.inputContainer}>
					<input
						type="text"
						id="title"
						name="title"
						placeholder="Title for your Hot Topic"
						className={classes.inputField}
					/>
					<input
						type="text"
						id="post"
						name="post"
						placeholder="What's on your mind?"
						className={classes.inputField}
					/>
				</div>
				<div className={classes.buttonContainer}>
					<button className={classes.addPhotoButton}>
						Add photo
					</button>
					<button className={classes.feelingActivityButton}>
						Feeling/activity
					</button>
				</div>
				<div className={classes.postContainer}>
					<MealsFormSubmit buttonDetail={"Post"} classname={classes.postButton}></MealsFormSubmit>
				</div>
			</form>
		</>
	);
}
