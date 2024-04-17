import Image from "next/image";

import mealIcon from "./../../assets/icons/meal.png";
import communityIcon from "./../../assets/icons/community.png";
import eventsIcon from "./../../assets/icons/events.png";
import classes from "./page.module.css";
import GetUsername from "./../../helpers/getUsername";
import Link from "next/link";

export default function CommunityPage() {
	return (
		<>
			<header className={classes.header}>
				<h1>
					One shared passion:{" "}
					<span className={classes.highlight}>Food</span>
				</h1>
				<p>Join our community and share your favorite recipes!</p>
				<div className={classes.cta}>
					<p>
						<Link href="/userDetails/profile">
							<GetUsername></GetUsername>
						</Link>
					</p>
					<p>
						<Link href="/community/feed">Go to Feed</Link>
					</p>
				</div>
			</header>
			<main className={classes.main}>
				<h2>Community Perks</h2>

				<ul className={classes.perks}>
					<li>
						<Image src={mealIcon} alt="A delicious meal" />
						<p>Share & discover recipes</p>
					</li>
					<li>
						<Image
							src={communityIcon}
							alt="A crowd of people, cooking"
						/>
						<p>Find new friends & like-minded people</p>
					</li>
					<li>
						<Image
							src={eventsIcon}
							alt="A crowd of people at a cooking event"
						/>
						<p>Participate in exclusive events</p>
					</li>
				</ul>
			</main>
		</>
	);
}
