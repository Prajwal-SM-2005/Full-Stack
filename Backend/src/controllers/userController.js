//routes --> to handle the specific path and the request that comes to that path. It is a way to organize the code and make it more readable and maintainable. Each route can have its own controller function that handles the request and sends a response back to the client. This separation of concerns makes it easier to manage and scale the application as it grows.
//controllers --> to handle the logic of the application. It is responsible for processing the request, interacting with the model, and sending a response back to the client. Controllers act as an intermediary between the routes and the models, ensuring that the application follows the MVC (Model-View-Controller) architecture pattern. This separation of concerns helps keep the code organized and maintainable.

import {User} from "../model/userModel.js"; //Importing the User model allows us to interact with the user collection in the database. We can use the model to perform CRUD operations, such as creating new users, retrieving existing users, updating user information, and deleting users. The model provides a structured way to work with the data and ensures that it adheres to the defined schema.

const registerUser = async (req, res) => {
    try 
    {
        const { username, password, email } = req.body; //Destructuring the request body to extract the username, password, and email fields. This allows us to easily access the data sent by the client when registering a new user.  
    
        //Basic validation 
        if (!username || !password || !email) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }
        //check if user already exists
        const existingUser = await User.findOne({ email }); //Using the User model to check if a user with the provided email already exists in the database. This helps prevent duplicate registrations and ensures that each user has a unique email address.
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        //capital letter Who User Model and user refers to 
        //create new user
        const newUser = await User.create({ username, password, email: email.toLowerCase() , loggedIN: false,}); //Using the User model to create a new user document in the database with the provided username, password, and email. This operation saves the new user to the user collection in MongoDB.
        res.status(201).json({ message: "User registered successfully", user: newUser }); //Sending a success response back to the client with a status code of 201 (Created) and a message indicating that the user was registered successfully. The newly created user object is also included in the response for reference.
    }   
     catch(error) {
        res.status(500).json({ message: "Error registering user" });
    }
};

export { registerUser }; //Exporting the registerUser function allows us to use it in other parts of our application, such as in the userRoute.js file where we can define a route for user registration. This modular approach helps keep our code organized and maintainable.