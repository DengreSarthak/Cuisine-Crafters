import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "./meals/meals-grid";
import { getMeals } from "../lib/meals";
import { Suspense } from "react";
import { MealsFormSearching } from "./meals/form-searching";

export const metadata = {
	title: "All Meals",
	description:
		"Browse the delicious meals, shared by a food-loving community.",
};

async function Meals() {
	const meals = await getMeals();
	return <MealsGrid meals={meals}></MealsGrid>;
}

export default function meal() {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Delicious food, created{" "}
					<span className={classes.highlight}>by you</span>
				</h1>
				<p>
					Choose your favorite recipe and cook it yourself. It is EASY
					and FUN!
				</p>
				<div className={classes.cta}>	
					<p>
					<Link href="/meals/featured-meals">Daily Featured Meals.</Link>
					</p>
					<p>
					<Link href="/meals/share">Share Your Favorite Recipe.</Link>
					</p>
				</div>
				<MealsFormSearching></MealsFormSearching>
			</header>
			<main className={classes.main}>
				<Suspense
					fallback={
						<p className={classes.loading}>Fetching Meals....</p>
					}
				>
					<Meals></Meals>
				</Suspense>
			</main>
		</>
	);
}
