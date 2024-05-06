'use client'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField } from "@mui/material"
import { useRef, useState } from 'react';

export const CommentsAction = (props) => {
    const ref = useRef(null)
    const [open, setOpen] = useState(false)
    const { comments , loading = false} = props
    const handleComment = () => {
        console.log('like')
    }
    const submit = () => {

    }
    return (
        <IconButton direction={'row'}   >
        <CommentOutlinedIcon onClick={()=> setOpen(true)} sx= {{color:!comments.length ? undefined: "blue"}}/>
        <Dialog
                open={open}
                fullWidth
                onClose={() => setOpen(false)}
            >
                <DialogTitle>Comments</DialogTitle>
                <DialogContent>
                    <Stack pt={1} gap={2}>
                        <TextField inputRef={ref} label='Comment' placeholder='Write your comment' />
                    </Stack>
                  

                </DialogContent>

                <DialogActions>
                    {!loading ? <Button  onClick={submit} variant='contained'>
                        Add a Comment
                    </Button> :
                        <LoadingButton loading variant="outlined">
                            Submit
                        </LoadingButton>
                    }
                </DialogActions>
            </Dialog>
    </IconButton>
    )
}