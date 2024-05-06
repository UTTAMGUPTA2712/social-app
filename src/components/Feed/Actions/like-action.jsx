'use client'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { IconButton } from "@mui/material"

export const LikeAction = (props) => {
    const { likes } = props
    const handleLike = () => {
        console.log('like')
    }
    return (
        <IconButton onClick={handleLike} >
            <FavoriteBorderIcon sx={{ color: !likes.length ? undefined : "red" }} />
        </IconButton>
    )
}