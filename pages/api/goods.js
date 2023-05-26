import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("Delivery");

    const goods = await db
      .collection("goods")
      .find({})
      .sort({ metacritic: -1 })
      //   .limit(10)
      .toArray();

    res.json(goods);
  } catch (e) {
    console.error(e);
  }
};
