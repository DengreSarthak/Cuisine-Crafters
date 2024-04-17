const sql = require("better-sqlite3");
const db = sql("posts.db");

const dummyPosts = [
	{
		slug: "Sauce Contrast",
		date: "2024-03-10",
		summary:
			"What is the difference between marinara sauce and bolognese sauce?",
		creator: "John Doe",
		creator_email: "johndoe@example.com",
	},
    {
		slug: "Margherita Or Marinara",
		date: "2023-12-10",
		summary:
			"What's the difference between pizza Margherita and pizza marinara?",
		creator: "Joey",
		creator_email: "johndoe@example.com",
	},
    {
		slug: "Desserts??",
		date: "2024-01-15",
		summary:
			"What are some traditional Italian desserts?",
		creator: "Monica",
		creator_email: "johndoe@example.com",
	},
];

db.prepare(
	`
   CREATE TABLE IF NOT EXISTS posts (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
	   slug TEXT NOT NULL UNIQUE,
       date TEXT NOT NULL,
       summary TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

async function initData() {
	const stmt = db.prepare(`
      INSERT INTO posts VALUES (
         null,
		 @slug,
         @date,
         @summary,
         @creator,
         @creator_email
      )
   `);

	for (const post of dummyPosts) {
		stmt.run(post);
	}
}

initData();
