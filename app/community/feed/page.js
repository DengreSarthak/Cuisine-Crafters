import { getPosts } from "./../../lib/posts";
import classes from "./page.module.css";
import PostGrid from "./posts/post-grid";
import NewPost from "./posts/new-post";

async function Posts() {
	const posts = await getPosts();
	return <PostGrid posts={posts}></PostGrid>;
} 

export default function Feed() {
	
	return (
        <>
		<main>
			<header className={classes.header}>
				<h1>Share Your Thoughts, Ignite Conversations.</h1>
			</header>
		</main>
		<NewPost></NewPost>
        <Posts></Posts>
        </>
	);
}
