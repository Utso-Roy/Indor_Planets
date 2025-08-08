const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const db = client.db("plantShopDB");
    const indoorPlants = db.collection("indoorPlants");
    const fertilizer = db.collection("fertilizerShop");
    const reportCollection = db.collection("reportCollection");
    const reviewCollection = db.collection("reviewCollection");
    const fertilizerReviewCollection = db.collection(
      "fertilizerReviewCollection"
    );
    const addProductsCollection = db.collection("addProductsCollection");

    //Fertilizer data
    app.get("/allFertilizer", async (req, res) => {
      const result = await fertilizer.find({}).toArray();
      res.send(result);
    });

    //fertilizer review post
    app.post("/fertilizerReview", async (req, res) => {
      try {
        const body = req.body;
        const result = await fertilizerReviewCollection.insertOne(body);
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "server Error", error });
      }
    });

    // get Review Data

   

    //all products data
    app.get("/allIndoorPlants", async (req, res) => {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 8;
      const search = req.query.search || "";

      const skip = (page - 1) * limit;

      const query = search ? { name: { $regex: search, $options: "i" } } : {};

      const total = await indoorPlants.countDocuments(query);
      const items = await indoorPlants
        .find(query)
        .skip(skip)
        .limit(limit)
        .toArray();

      res.send({
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
        data: items,
      });
    });

    //getPlantsDetailsData

    app.get("/plantsDetailsData", async (req, res) => {
      try {
        const result = await indoorPlants.find({}).toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "server Error", error });
      }
    });
    //plants report
    app.post("/report", async (req, res) => {
      try {
        const body = req.body;
        const result = await reportCollection.insertOne(body);
        res.send(result);
      } catch (error) {
        res.status(500).send({ Message: "Server Error", error });
      }
    });

    app.get("/reportData", async (req, res) => {
      const result = await reportCollection.find({}).toArray();
      res.send(result);
    });

    //plants review Post

    app.post("/review", async (req, res) => {
      try {
        const body = req.body;
        const result = await reviewCollection.insertOne(body);
        res.send(result);
      } catch (error) {
        res.status(500).send({ Message: "Server Error", error });
      }
    });
    //get review data
    app.get("/reviewData", async (req, res) => {
      const result = await reviewCollection.find({}).toArray();
      res.send(result);
    });

    //

   app.get("/homeReviewData", async (req, res) => {
      const result = await reviewCollection.find({showInHome: true}).toArray();
      res.send(result);
    });


// patch data 
    app.patch("/reviewData/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { reviewId: id };
  const update = { $set: { showInHome: true } };

  const result = await reviewCollection.updateOne(filter, update);
  res.send(result);
});


    // New arrival card

    app.get("/newArrivalCards", async (req, res) => {
      try {
        const result = await indoorPlants.find({ isNew: true }).toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Server Error", error });
      }
    });

    //Best seller Shop
    app.get("/bestSellerCards", async (req, res) => {
      try {
        const result = await indoorPlants
          .find({
            isBest: true,
          })
          .toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Server Error", error });
      }
    });

    //addProducts Collection

    app.post("/addProductsData", async (req, res) => {
      try {
        const body = req.body;
        const result = await addProductsCollection.insertOne(body);
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Server Error", error });
      }
    });

    //get add products collection

    app.get("/addProductsData", async (req, res) => {
      try {
        const result = await addProductsCollection.find({}).toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Server Error", error });
      }
    });

    //Delete AddProductsData

    app.delete("/addProductsData/:id", async (req, res) => {
      const id = req.params.id;

      try {
        const result = await addProductsCollection.deleteOne({
          _id: new ObjectId(id),
        });
        if (result.deletedCount === 1) {
          res.send({ success: true, message: "Product deleted successfully" });
        } else {
          res
            .status(404)
            .send({ success: false, message: "Product not found" });
        }
      } catch (error) {
        res.status(500).send({ message: "Server Error", error });
      }
    });

    console.log(" MongoDB Connected successfully");
  } catch (err) {
    console.error(" MongoDB Error:", err);
  }
}

run();
app.get("/", (req, res) => {
  res.send(" GreenGhor Server is Running!");
});

app.listen(port, () => {
  console.log(` Server listening on http://localhost:${port}`);
});
