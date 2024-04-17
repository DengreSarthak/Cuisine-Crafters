"use server";

import { redirect } from "next/navigation";

import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";
import { savePost } from "./posts";

function isInvalidText(text) {
	return !text || text.trim === "";
}

export async function searchMeal(prevState, formData) {

	const enteredMeal = formData.get("search");
	const searchedMeal = enteredMeal.toLowerCase();

	const modifiedMeal = searchedMeal.replace(/\s+/g, '-');

	const fullpath = `/meals/${modifiedMeal}`;
	redirect(fullpath);
}

export async function shareMeal(prevState, formData) {
	const meal = {
		title: formData.get("title"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
		creator: formData.get("name"),
		creator_email: formData.get("email"),
	};

	if (
		isInvalidText(meal.title) ||
		isInvalidText(meal.summary) ||
		isInvalidText(meal.instructions) ||
		isInvalidText(meal.creator) ||
		isInvalidText(meal.creator_email) ||
		!meal.creator_email.includes("@") ||
		!meal.image ||
		meal.image.size === 0
	) {
		return {
			message: "Invalid input.",
		};
	}
	await saveMeal(meal);
	revalidatePath("/meals");
	redirect("/meals");
}

export async function sharePost(prevState, formData, creator, email) {

	const post = {
		title: formData.get("title"),
		summary: formData.get("post"),
		creator: "Chandler Bing",
		creator_email: "Email",
	};

	if (
		isInvalidText(post.title) 
	) {
		return {
			message: "Invalid input.",
		};
	}
	await savePost(post);
	revalidatePath("/community/feed");
	redirect("/community/feed");
}

