import { getFeaturedMeal } from "./../../lib/meals";
import { Suspense } from "react";
import MealsGrid from "../meals/meals-grid";
import classes from "./page.module.css";

async function Meals() {
	const meals = await getFeaturedMeal();
	return <MealsGrid meals={meals}></MealsGrid>;
}

export default function FeaturedMeals() {
	return (
		<>
			<header className={classes.header}>
				<h1>Discover Today&apos;s Culinary Delights!</h1>
				<div className={classes.quote}>
					<p>
					&quot;Food is maybe the only universal thing that really has
						the power to bring everyone together.&quot;
					</p>
					<span>--Guy Fieri</span>
				</div>
			</header>
			<main>
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
