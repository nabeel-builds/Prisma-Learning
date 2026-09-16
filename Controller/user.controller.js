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
        data: {
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

export const updateUser = async (req, res) => {
    try {

        const userId = req.params.id

        const { name, email, password } = req.body

        await prisma.user.update({
            where: {
                id: Number(userId)
            },
            data: {
                name,
                email,
                password
            }
        })

        return res.status(200).json({
            message: "User updated Successfully"
        })

    } catch (error) {

        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })

    }
}