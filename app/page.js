import Link from "next/link";

import classes from "./page.module.css";
import ImageSlideshow from "./../components/images/image-slideshow";
import FeaturedMeals from "./meals/featured-meals/page";

export default function Home() {
	return (
		<>
			<header className={classes.header}>
				<div className={classes.slideshow}>
					<ImageSlideshow></ImageSlideshow>
				</div>
				<div>
					<div className={classes.hero}>
						<h1>
							Crafting Culinary Excellence, One Dish at a Time.
						</h1>
						<p>Unleash Your Inner Chef, Explore Endless Flavors.</p>
					</div>
					<div className={classes.cta}>
						<Link href="/community">Join the Community</Link>
						<Link href="/meals">Explore Meals</Link>
					</div>
				</div>
			</header>
			<main>
				<section className={classes.section}>
					<h4>
						Welcome to Cuisine Crafters, where culinary creativity
						knows no bounds! Our platform is your passport to a
						world of tantalizing tastes, innovative recipes, and
						endless inspiration. Whether you&apos;re a seasoned chef or a
						passionate home cook, Cuisine Crafters is your ultimate
						destination for all things delicious.
					</h4>
				</section>
				<FeaturedMeals></FeaturedMeals>
			</main>
		</>
	);
}

