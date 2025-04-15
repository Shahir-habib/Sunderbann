const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
require("dotenv").config();

const Product = require("./models/Product");

const MONGO_URI = "mongodb+srv://shahir:Shahir%4004@cluster0.aafwlsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function seedProducts() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");

    const filePath = path.join(__dirname, "..", "data", "bookdata.csv");

    const products = [];
    const readStream = fs.createReadStream(filePath).pipe(csv());

    const brands = ["Random House", "Simon & Schuster", "Penguin", "HarperCollins"];
    let c= 0;
    readStream.on("data", (data) => {
        c++;
      if (c > 10) {
        // Extract stock number using RegEx
        const stockMatch = data.quantity.match(/\((\d+)\s*available\)/);
        const stockCount = stockMatch ? parseInt(stockMatch[1]) : 0;

        // Convert rating text (e.g., "Three") to number
        const ratingMap = {
          One: 1,
          Two: 2,
          Three: 3,
          Four: 4,
          Five: 5,
        };
        const averageReview = ratingMap[data.rating.trim()] || 0;

        // Random brand
        const brand = brands[Math.floor(Math.random() * brands.length)];

        // Build product object
        products.push({
          image: data.img_link || "",
          title: data.title || "",
          description: data.title || "", // fallback
          category: data.category || "",
          brand,
          price: parseFloat(data.price_e_tax) || 0,
          salePrice: parseFloat(data.price_i_tax) || 0,
          totalStock: stockCount,
          averageReview,
        });
      }
    });


    readStream.on("end", async () => {
      try {
        const existing = await Product.countDocuments();
        if (existing === 10) {
          await Product.insertMany(products);
          console.log(" products inserted into the database.");
        } else {
          console.log("Products already exist. Skipping insert.");
        }
      } catch (err) {
        console.error("Error inserting products:", err);
      } finally {
        await mongoose.disconnect();
      }
    });

  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

seedProducts();
