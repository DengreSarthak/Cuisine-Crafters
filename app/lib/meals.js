import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");
const featured_db = sql("featuredMeals.db");

export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 5000));

	// throw new Error('Loading meals failed');
	return db.prepare("SELECT * FROM meals").all();
}

export async function getFeaturedMeal() {
	await new Promise((resolve) => setTimeout(resolve, 5000));

	return featured_db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
	return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}


export async function saveMeal(meal) {
	meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);

	const currentDate = new Date();

	const formattedDate = currentDate.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	meal.date = formattedDate;

	const extension = meal.image.name.split(".").pop();
	const fileName = `${meal.slug}.${extension}`;

	const stream = fs.createWriteStream(`public/images/${fileName}`);
	const bufferedImage = await meal.image.arrayBuffer();

	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) {
			throw new Error("Saving image failed!");
		}
	});

	meal.image = `/images/${fileName}`;

	db.prepare(
		`
    INSERT INTO meals
      (date, title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
		@date,
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
	).run(meal);
}
