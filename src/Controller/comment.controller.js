import prisma from "../DB/db.config.js"

export const createComment = async (req, res) => {

    const { user_id, post_id, comment } = req.body

    /**Increase the comment counter */
    await prisma.post.update({
        where:{
            id:Number(post_id)
        },
        data:{
            comment_count: {
                increment:1
            }
        }
    })

    const newComment = await prisma.comment.create({
        data: {
            user_id: Number(user_id),
            post_id: Number(post_id),
            comment
        }
    })

    return res.status(200).json({
        message: "Comment created",
        data: newComment
    })

}

export const updateComment = async (req, res) => {
    try {

        const commentId = req.params.id

        const { comment_id, comment } = req.body

        await prisma.comment.update({
            where: {
                id: Number(commentId)
            },
            data: {
                comment_id: Number(commentId),
                comment
            }
        })

        return res.status(200).json({
            message: "Comment updated Successfully"
        })

    } catch (error) {

        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })

    }
}

export const fetchComments = async (req, res) => {
    try {

        const comments = await prisma.comment.findMany({})

        return res.status(200).json({
            message: "Data fetched successfully",
            data: comments
        })

    } catch (error) {

        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })

    }
}

export const showComment = async (req, res) => {

    const commentId = req.params.id

    const comments = await prisma.comment.findFirst({
        where: {
            id: Number(commentId)
        }
    })

    return res.status(200).json({
        data: comments
    })

}

export const deleteCommnet = async (req, res) => {

    const commnetId = req.params.id

    const {post_id} = req.body

    /**Decrease the comment counter */
    await prisma.post.update({
        where:{
            id:Number(post_id)
        },
        data:{
            comment_count:{
                decrement: 1
            }
        }
    })

    await prisma.comment.delete({
        where: {
            id: Number(commnetId)
        }
    })

    return res.status(200).json({
        message: "comment deleted successfully"
    })
}