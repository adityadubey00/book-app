import User from "../model/workmodel.js";
import bcrypt from "bcryptjs";

// Sign-up function
export const signup = async(req, res) => {
    const { fullname, email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Encrypt password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            fullname,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Login function
export const login = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};