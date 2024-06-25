const { MongoClient, ServerApiVersion } = require("mongodb");
// Replace the placeholder with your Atlas connection string
const uri =
  "mongodb+srv://hikmahaldrin:hikmah44@cluster0.rvtbfub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    const database = client.db("ald"); // replace with your database name
    const collection = database.collection("testAld"); // replace with your collection name

    // INSERT DATA
    const doc = { name: "example", email: "email@gmail.com" };
    const insertResult = await collection.insertOne(doc);

    const manyDoc = [
      { name: "erine", email: "erine@gmail.com" },
      { name: "hillary", email: "hillary@gmail.com" },
      { name: "adel", email: "adel@gmail.com" },
    ];
    const insertManyResult = await collection.insertMany(manyDoc);

    console.log("Inserted document:", insertManyResult);
    console.log("Inserted document:", insertResult);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
