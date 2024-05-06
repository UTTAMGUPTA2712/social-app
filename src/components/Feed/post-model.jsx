'use client'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react'
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ref as firebseRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid';
import { postAction } from '@/actions/post.action';
import { useSession } from 'next-auth/react';
import { storage } from '@/config/firebase';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const PostModal = () => {
    const session =  useSession()
    const ref = useRef(null);
    const [open, setOpen] = useState(false);
    const [media, setMedia] = useState(null);
    const [mediaPreview, setMediaPreview] = useState(null);
    const [isVideo, setIsVideo] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleMediaPreview = (e) => {
        const selectedMedia = e.target.files[0];
        setIsVideo(selectedMedia.type.startsWith("video/")); // Returns true if the selected media is a video
        setMedia(selectedMedia);
        setMediaPreview(URL.createObjectURL(selectedMedia));
    };
 
    const submit = async () => {
        const description = ref?.current.value;
        if (!description || !media) return;
        setLoading(true)

        const mediaRef = firebseRef(storage, `${media.name + v4()}`);
        await uploadBytes(mediaRef, media);

        const downloadURL = await getDownloadURL(mediaRef);
        await postAction({
            description,
            mediaURL: downloadURL,
            email: session?.data?.user?.email,
        })

    }

    return (
        <Dialog
            open={true}
            fullWidth
            onClose={() => setOpen(false)}
        >
            <DialogTitle>Create a Post</DialogTitle>

            <DialogContent>
                <Stack pt={1} gap={2}>
                    <TextField inputRef={ref} label='Description' placeholder='Description' />
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload file
                        <VisuallyHiddenInput type="file" onChange={handleMediaPreview} />
                    </Button>

                </Stack>
                {mediaPreview && <Typography variant='h6'>Preview</Typography>}
                {mediaPreview && isVideo && (
                    <video
                        src={mediaPreview}
                        alt=""
                        style={{ width: "100%", height: "400px", marginTop: "10px" }}
                        controls
                    />
                )}
                {mediaPreview && !isVideo && (
                    <img
                        src={mediaPreview}
                        alt=""
                        style={{ width: "100%", height: "400px", marginTop: "10px" }}
                    />
                )}

            </DialogContent>

            <DialogActions>
                <Button onClick={submit} variant='contained'>
                    Add
                </Button>
            </DialogActions>

        </Dialog>
    )
}

export default PostModal