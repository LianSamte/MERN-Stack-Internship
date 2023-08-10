const UserModel = require("../model/user.js");

// Create and save new user 
exports.create = async(req, res)=>
{
    if (!req.body.email && !req.body.username && req.body.password)
    {
        res.status(400).send({message: "All the fields are required"});
    }

    const user = new UserModel(
    {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    await user.save().then(data => 
    {
        res.send(
        {
            message: "User created successfully",
            user: data
        });
    }).catch(err =>
    {
        res.status(500).send(
        {
            message: err.message || "Some error"
        });
    });
}

// Find a single user with an id
exports.login = async(req, res) => 
{
    try
    {
        const user = await UserModel.findOne(req.params.id);
        res.status(200).json(user);
    }
    catch(error)
    {
        res.status(404).json(
            {
                message: error.message
            }
        )
    }
};