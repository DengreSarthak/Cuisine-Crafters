import PostItem from "./post-item";
import classes from "./post-grid.module.css";

export default  function PostGrid({ posts }) {
	return (
		<>
			<ul className={classes.posts}>
				{posts.map((post) => (
					<li key={post.id}>
						<PostItem {...post}></PostItem>
					</li>
				))}
			</ul>
		</>
	);
}
