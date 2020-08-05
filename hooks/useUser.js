import { useContext, useState, useCallback, } from 'react'
import { Auth } from '../context/auth'
import { app } from '../config/firebase'
import Router from 'next/router'

export const useUser = () => {
    const user = useContext(Auth);
    const [state, setState] = useState({ error: false, loading: false });

    const Login = useCallback(
        ({ email, password }) => {
            setState({ error: false, loading: true })
            app.auth().signInWithEmailAndPassword(email, password)
                .then(result => {
                    setState({ error: false, loading: false });
                    Router.push('/timeline')
                })
                .catch(error => {
                    setState({ error: true, loading: false });
                });
        },
        [setState],
    );

    const logout = useCallback(
        () => {
            setState({ error: false, loading: true });
            app.auth().signOut()
                .then(() => {
                    setState({ error: false, loading: false });
                    user.setUser(null);
                })
                .catch((error) => {
                    setState({ error: true, loading: false })
                })
        },
        [],
    )

    const signup = useCallback(
         ({ email, password, username }) => {
            app.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    const {uid} = user.user
                    setState({ error: false, loading: false });
                    Router.push('/timeline')
                })
                .catch((error) => {
                    setState({ error: true, loading: false })
                    console.log(error)
                })
        },
        [],
    )

    return {
        error: state.error,
        loading: state.loading,
        isLogged: Boolean(user.user),
        Login,
        logout,
        signup,

    }
}
