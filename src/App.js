import React, { useState, useEffect } from 'react';
import { Button, FormControl , InputLabel, Input } from '@material-ui/core';

import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
    
    ]);
    const [username, setUserName] = useState('');

        //useState = variable in REACT
        //useEffect = code runs based on condition
   
    useEffect(() => {
        //run once when the app component loads : Listening to the DB
        db.collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
        });
       
    }, [])
    
    useEffect(() => {
        //const username = prompt('Please use your name')
        setUserName(prompt('Please enter your name'))
    }, []) //condition, if it is empty it will rune ONCE only


    const sendMessage = (event) => {
        // all the logic to send a message goes here
        event.preventDefault();

        db.collection('messages').add ({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('');
    }

    return (
        <div className="App">
            <img src="https://brandpalettes.com/wp-content/uploads/2018/10/Facebook_Messenger_logo-298x300.png" width="100" height="100" alt="Facebook Messenger Logo"></img>
            <h1> Facebook Messenger </h1>
            <h2>Welcome {username} </h2>
            <form className="app__form">
              
                <FormControl className="app__formControl">
                    <Input className="app__input" placeholder='Enter a message...'  value={input} onChange={event => setInput(event.target.value)} />
                    <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
                   <SendIcon></SendIcon>
                    </IconButton>

                </FormControl>
            </form>
            <FlipMove>
                {
                    messages.map(({ id, message }) => (
                        <Message key={id} username={username} message={message} />

                ))

                }
              </FlipMove>
        </div>
    );
}

export default App