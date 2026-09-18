import prisma from "../DB/db.config.js"

export const createPost = async (req, res) => {

    const { user_id, title, description } = req.body


    const newPost = await prisma.post.create({
        data: {
            user_id: Number(user_id),
            title,
            description
        }
    })

    return res.status(200).json({
        message: "Post created",
        data: newPost
    })

}

export const updatePost = async (req, res) => {
    try {

        const postId = req.params.id

        const { post_id, title, description  } = req.body

        await prisma.post.update({
            where: {
                id: Number(postId)
            },
            data: {
              post_id: Number(postId),
              title,
              description
            }
        })

        return res.status(200).json({
            message: "Post updated Successfully"
        })

    } catch (error) {

        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })

    }
}

export const fetchPosts = async (req, res) => {
    try {

        const posts = await prisma.post.findMany({})

        return res.status(200).json({
            message: "Data fetched successfully",
            data: posts
        })

    } catch (error) {

        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })

    }
}

export const showPost = async (req, res) => {

    const postId = req.params.id

    const posts = await prisma.post.findFirst({
        where: {
            id: Number(userId)
        }
    })

    return res.status(200).json({
        data: posts
    })

}

export const deletePost = async (req, res) => {

    const postId = req.params.id

    await prisma.post.delete({
        where: {
            id: Number(postId)
        }
    })

    return res.status(200).json({
        message: "Post deleted successfully"
    })
}