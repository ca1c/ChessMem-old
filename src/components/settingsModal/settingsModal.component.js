import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))

export default function SettingsModal() {
    const classes = useStyles();
    const[open, setOpen] = React.useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    window.openSettings = handleOpen;

    const body = (
        <div className = {classes.paper}>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
                Epic and cool text
            </p>
            <SettingsModal />
        </div>
    );

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    )
}












