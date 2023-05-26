import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  try {
    const client = await clientPromise;
    const db = client.db("Delivery");

    const { name, email, phone, address, items } = req.body;
    const result = await db
      .collection("orders")
      .insertOne({ name, email, phone, address, items });

    if (result) {
      res
        .status(201)
        .json({ name, email, phone, address, items, _id: result.insertedId });
    } else {
      res.status(400);
    }
  } catch (e) {
    console.error(e);
  }
};
