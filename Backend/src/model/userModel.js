//Models are structures that define the shape of documents within a MongoDB collection. They provide a blueprint for how data should be stored and validated in the database. In Mongoose, models are created using schemas, which define the fields and their types, as well as any validation rules or default values.
// model is the representation of a collection in the database, and it allows you to perform CRUD (Create, Read, Update, Delete) operations on the documents within that collection. Models are essential for interacting with the database in a structured and organized manner, ensuring data integrity and consistency.
// model is the code version of structure the way u want in your website -->schema -->structure

//userModel.js -->Authentication
//post --> creat that is posted on the website
import mongoose,{schema} from "mongoose";

const userSchema = new Schema(
    {
        username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true , // removes whitespace from both ends of a string ex "   hello   " --> "hello"
        minLength:[3,"username must be at least 3 characters long"],
        maxLength:[20,"username must be at most 20 characters long"]
                },

         password:{
            type: String,
            required: true,
            minLength: [6, "Password must be at least 6 characters long"],
            maxLength: [50, "Password must be at most 50 characters long"],
            select: false // Exclude password field from query results by default
         },

         email:{
            type:String,
            required:true,
            unique:true,    
            lowercase:true,
            trim:true,
            match:[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please provide a valid email address"]
         },
    },

    {
        timestamps:true, // Automatically adds createdAt and updatedAt fields to the schema
    }

)
export const User = mongoose.model("User",userSchema) //user Model --> model is the representation of a collection in the database, and it allows you to perform CRUD (Create, Read, Update, Delete) operations on the documents within that collection. Models are essential for interacting with the database in a structured and organized manner, ensuring data integrity and consistency.