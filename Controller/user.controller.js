import prisma from "../DB/db.config.js";

export const createUser = async (req, res) => {

    const { name, email, password } = req.body

    const emailIsAlreadyExists = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (emailIsAlreadyExists) {
        return res.status(400).json({
            message: "Email is already exists"
        })
    }

    const newUser = await prisma.user.create({
        data:{
            name: name,
            email: email,
            password: password
        }
    })

    return res.status(200).json({
        message: "User created",
        data: newUser
    })

}