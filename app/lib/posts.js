import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";


const db = sql("posts.db");

export async function getPosts() {
	await new Promise((resolve) => setTimeout(resolve, 5000));

	// throw new Error('Loading posts failed');
	return db.prepare("SELECT * FROM posts").all();
}

export async function savePost(post) {
	post.slug = slugify(post.title, { lower: true });
	// post.instructions = xss(post.instructions);

	const currentDate = new Date();

	const formattedDate = currentDate.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	post.date = formattedDate;

	// const extension = post.image.name.split(".").pop();
	// const fileName = `${post.slug}.${extension}`;

	// const stream = fs.createWriteStream(`public/images/${fileName}`);
	// const bufferedImage = await post.image.arrayBuffer();

	// stream.write(Buffer.from(bufferedImage), (error) => {
	// 	if (error) {
	// 		throw new Error("Saving image failed!");
	// 	}
	// });

	// post.image = `/images/${fileName}`;

	db.prepare(
		`
    INSERT INTO posts
      (date, summary, creator, creator_email, slug)
    VALUES (
		@date,
      @summary,
      @creator,
      @creator_email,
      @slug
    )
  `
	).run(post);
}
