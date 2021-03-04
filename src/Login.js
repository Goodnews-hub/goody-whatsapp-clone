import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import "./Login.css";
import { actionTypes } from './reducer';
import { useStateValue } from "./StateProvider";

function Login() {
    const [{ user }, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
           <div className="login__container">
           <img 
              src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-photo%2Fvalencia-spain-march-05-2017-260nw-593508881.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fwhatsapp%2Bicon&tbnid=Es2-UFuN1QIjEM&vet=12ahUKEwjLp9mgkIvvAhWK8IUKHWSyD3MQMygEegUIARDYAQ..i&docid=H2h67vz97xJ3aM&w=319&h=280&q=whatsapp%20logo&ved=2ahUKEwjLp9mgkIvvAhWK8IUKHWSyD3MQMygEegUIARDYAQ"
              alt=""
            />
            <div className="login__text">
            <h1>Sign in to WhatsApp</h1>  
        </div>

        <Button onClick={signIn}>
           Sign In with Google
        </Button>
        </div>
        </div>
    );
}

export default Login;
