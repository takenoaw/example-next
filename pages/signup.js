import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import { useFormik } from 'formik';
import { useUser } from '../hooks/useUser';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 'auto',
        },
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function login(props) {

    const { signup, loading, isLogged } = useUser()
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            username: '',
            date: new Date(),
        },
        onSubmit: async (values) => {
            // event.preventDefault();
            signup(values);
        }
    });
    return (
        <div className="container">
            <div className="mt-3" style={{ paddingLeft: '25%', paddingRight: '25%', paddingTop: '9%' }}>
                <p style={{ textAlign: 'center', fontSize: '40px' }} >Sign up</p>
                <form className={classes.root} noValidate autoComplete="off" >
                    <div>
                        <TextField id="username" label="Username" type="text" fullWidth onChange={formik.handleChange} />
                    </div>
                    <div>
                        <TextField id="email" label="Email" type="email" fullWidth onChange={formik.handleChange} />
                    </div>
                    <div>
                        <TextField id="password" label="Password" type="password" fullWidth onChange={formik.handleChange} />
                    </div>
                    <div>
                        {/* TODO date picker here */}
                    </div>
                    <div style={{ alignContent: 'center' }}>
                        <Backdrop className={classes.backdrop} open={loading} >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    </div>
                    <Button variant="contained" color="primary" onClick={formik.handleSubmit}>
                        sigup
                    </Button>
                </form>
            </div>
        </div>
    )
}
