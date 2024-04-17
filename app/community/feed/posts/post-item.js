import classes from "./post-item.module.css";
//import axios from "axios";

export default async function PostItem({slug, date, summary }) {
	
	return (
		<div className={classes.postItem}>
			<div>
				<div className={classes.postHeader}>
					<h3 className={classes.name}>{slug}</h3>
					<span className={classes.date}>{date}</span>
				</div>
				<p className={classes.content}>{summary}</p>
			</div>
			<div className={classes.buttonContainer}>
				<button className={classes.likeButton}>UpVote</button>
				<button className={classes.thoughtButton}>
					Share Your Thought
				</button>
			</div>
		</div>
	);
}
