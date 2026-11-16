import React, { useState, useEffect } from 'react';

function JokeComponent() {
    // State to store the joke
    const [joke, setJoke] = useState('');
    const [dadJoke, setDadJoke] = useState('');
    
    useEffect(() => {
    const timerId = setInterval(jokeByInterval, 10000);

    return () => clearInterval(timerId);
    }, []);


    function handleClick() {
     fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => setJoke(data.value))
        .catch(error => console.error('Error fetching joke:', error));

}

    function jokeByInterval() {
 
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => setDadJoke(data.joke))
        .catch(error => console.error('Error fetching joke:', error));
    }

    return (
        <div>
            <p>{joke}</p>
            <button onClick ={handleClick}>
                Get ChuckNorris-joke
            </button>

            <p>{dadJoke}</p>


        </div>
    );
}


export default JokeComponent;