import React from 'react'

function ControlledInput() {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    
    function handleSubmit(event) {
    
        event.preventDefault();
        console.log('name:', name);
        console.log('email:', email);
        console.log('message:', message);
    }
    
    return (
    
        <form onSubmit={handleSubmit}>
            <h2>Controlled Form</h2>
        <div>
            <label htmlFor="name">Name</label>
            <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
        </div>
        <button type="submit">Submit</button>
        </form>
    );
}

export default ControlledInput