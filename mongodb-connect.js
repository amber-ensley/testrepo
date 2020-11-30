const { MongoClient } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    const fedDb = "fed2010FirstDb";
    const db = client.db(fedDb)

    if(err){
        console.log("Unable to reach MongoDB server")
    };

    console.log("Connected to MongoDB server successfully");

    // create

    // db.collection(fedDb).insertOne({
    //     taskName: "Learn MongoDB",
    //     completed: false
    // }, (error, result) => {
    //     if(error){
    //         console.log("there was an error inserting data")
    //     }
    // });

    // db.collection(fedDb).insertMany([
    //     {
    //         taskName: "Task 1",
    //         completed: false
    //     },
    //     {
    //         taskName: "Task 1",
    //         completed: false
    //     }
    // ], err => {
    //     if (err){
    //         console.log("there was an error inserting data");
    //     }
    // })

    // update

    // db.collection(fedDb).updateOne({taskName: "Learn MongoDB"}, {
    //     $set: {completed: true}
    // }).then(result => console.log(result))

    // db.collection(fedDb).updateMany({taskName: "Task 1"}, {
    //     $set: {
    //         completed: false
    //     }
    // }).then(result => console.log(result))

    // delete 

    // db.collection(fedDb).deleteOne({taskName: "Learn MongoDB" }, result => console.log(result));

    // db.collection(fedDb).deleteMany({taskName: "Task 1"}, result => console.log(result));

    // read

    db.collection(fedDb).find({taskName: "Task 1"}).toArray().then(items => console.log(items));

    client.close();
})