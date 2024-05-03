import { db, GuestBook } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(GuestBook).values([
    {
      author: "John Doe",
      content: "Your are so cool!",
    },
    {
      author: "Astro Bot",
      content: "Hello, world!",
    },
  ]);
}
