import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import contacts from './Contact';
import Avatar from './Avatar';
import './App.css';

function App(){
    return (
        <div>
            <h1 className='heading'>My Contacts</h1>
            <Avatar img='https://www.w3schools.com/howto/img_avatar.png'/>

            {contacts.map(createCard => (
                <Card
                    key={createCard.id}
                    id={createCard.id}
                    name={createCard.name}
                    img={createCard.imgURL}
                    tel={createCard.phone}
                    email={createCard.email}
                />
            ))}

            {/* <Card 
                name={contacts[0].name}
                img={contacts[0].imgURL}
                tel={contacts[0].phone}
                email={contacts[0].email}
            />
            <Card 
                name={contacts[1].name}
                img={contacts[1].imgURL}
                tel={contacts[1].phone}
                email={contacts[1].email}
            />
            <Card 
                name={contacts[2].name}
                img={contacts[2].imgURL}
                tel={contacts[2].phone}
                email={contacts[2].email}
            /> */}
        </div>
    );
}

export default App;