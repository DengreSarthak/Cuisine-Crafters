import Link from "next/link";
import Image from "next/image";

import classes from "./meals-item.module.css";

const formatDate = (dateString) => {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		day: "numeric",
		month: "long",
	});
};

export default function MealItem({date,	title,slug,	image,summary, creator}) {

	const humanReadableDate = formatDate(date);

	return (
		<article className={classes.meal}>
			<header>
				<div className={classes.image}>
					<Image src={image} alt={title} fill />
				</div>
				<div className={classes.headerText}>
					<h2>{title}</h2>
					<p>by {creator}</p>
				</div>
			</header>
			<div className={classes.content}>
				<div className={classes.date}>
          <time>{humanReadableDate}</time>
        </div>
				<p className={classes.summary}>{summary}</p>
				<div className={classes.actions}>
					<Link href={`/meals/${slug}`}>View Details</Link>
				</div>
			</div>
		</article>
	);
}
