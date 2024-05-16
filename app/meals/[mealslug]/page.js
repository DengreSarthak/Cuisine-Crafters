import { getMeal } from "./../../lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";
import classes from "./page.module.css";

export async function generateMetadata({params}) {
	const meal = getMeal(params.mealslug);

	if(!meal){
		notFound();
	}
	
	return {
		title : meal.title,
		description: meal.summary,
	};
}

export async function generateStaticParams() {
	// Example: Assuming you have a way to fetch all meals slugs
	const meals = await getMealsSlugs(); // You need to implement this function based on your data source
  
	// Return an array of objects where each object represents a parameter value
	return meals.map(meal => ({
	  mealslug: meal.slug, // Assuming each meal has a unique slug property
	}));
  }

export default function MealDetailsPage({ params }) {
	const meal = getMeal(params.mealslug);

	if(!meal){
		notFound();
	}

	meal.instructions = meal.instructions.replace(/\n/g, '<br />');

	return (
		<>
			<header className={classes.header}>
				<div className={classes.image}>
					<Image src={meal.image} alt={meal.title} fill></Image>
				</div>
				<div className={classes.headerText}>
					<h1>{meal.title}</h1>
					<p className={classes.creator}>
						by{" "}
						<a href={`mailto:${meal.creator_email}`}>
							{meal.creator}
						</a>
					</p>
					<p className={classes.summary}>{meal.summary}</p>
				</div>
			</header>
			<main>
				<p
					className={classes.instructions}
					dangerouslySetInnerHTML={{ __html: meal.instructions }}
				></p>
			</main>
		</>
	);
}
