'use client'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { IconButton } from "@mui/material"

export const LikeAction = (props) => {
    const { likes } = props
    console.log("🚀 ~ LikeAction ~ likes:", likes.length)
    const handleLike = () => {
        console.log('like')
    }
    return (
        <IconButton onClick={handleLike} >
            <FavoriteBorderIcon color={likes.length !== 0 ? "error" : undefined}  />
        </IconButton>
    )
}