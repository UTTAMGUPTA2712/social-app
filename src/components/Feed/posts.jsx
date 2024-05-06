import { getPosts } from "@/actions/post.action";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import { auth } from "@/config/auth";
import { LikeAction } from "./Actions/like-action";
import { CommentsAction } from "./Actions/comment-action";
export const Posts = async () => {
    const posts = await getPosts()
    const session = await auth()
    const email = session?.user?.email
    const handleLike = () => {

    }
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: "1rem",
        }}>
            {posts.map((post) => {
                const { mediaURL, email, description, likes, comments } = post
                return (
                    <Stack sx={{ border: '1px solid #eeeeee', width: "400px", boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', }}>
                        <Stack p={2}>
                            <Typography variant="subtitle2" fontWeight={700}>{email}</Typography>
                        </Stack>
                        {mediaURL.substring('jpg') ? <img src={post.mediaURL} alt="post" width={'100%'} height={300} />
                            :
                            <video src={mediaURL} controls
                                loop
                                muted
                                autoPlay />
                        }
                        <Typography p={2}>{description}</Typography>

                        <Stack direction={'row'} gap={3} justifyContent={'space-between'} p={1}>
                            <LikeAction likes={likes} />
                            <CommentsAction comments={comments}  />
                        </Stack>
                        <Typography sx={{ pl: 2 }}>{likes.length ? likes.length : ""} {!likes.length ? "" : likes}</Typography>
                    </Stack>
                )
            })}
        </Box>
    );
}