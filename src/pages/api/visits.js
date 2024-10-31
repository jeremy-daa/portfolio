import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function updateVisitCount() {
  await client.connect();
  const db = client.db("myDatabase"); // Replace with your database name
  const collection = db.collection("visitCount");

  let visitCount = await collection.findOne({ name: "counter" });
  if (!visitCount) {
    visitCount = { name: "counter", count: 1 };
    await collection.insertOne(visitCount);
  } else {
    visitCount.count += 1;
    await collection.updateOne(
      { name: "counter" },
      { $set: { count: visitCount.count } }
    );
  }

  return visitCount.count;
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    const count = await updateVisitCount();
    res.status(200).json({ count });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
