import mongoose from "mongoose";
 export const connetDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://hanvph35034:Tyugh567@cluster0.yfewu7j.mongodb.net/food-del"
    )
    .then(() => {
      console.log("Db thanh cong");
    })
    .catch((error) => {
      console.log(error);
    });
};
