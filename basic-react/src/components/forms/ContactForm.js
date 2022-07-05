import React,{useRef,useState} from "react";

function ContactForm() {

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const [error,setError]=useState('')
    console.log(nameRef,emailRef,messageRef);

    function submit(e)
    {
        e.preventDefault();
        // console.log('refs value',nameRef.current.value,emailRef,messageRef);
        // if(!nameRef.current.value)
        //     console.log('Error! Name is a requried field!');
        console.log('on form submit',e.target.name.value)

        if(e.target.name.value.length<3)
           setError('Minimum length should be 3 characters');
        else
          setError('');

    }
    console.log('error rendered',error);
    return (
      <form onSubmit={submit}>
          <h2>UnControlled Form</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            ref={nameRef}
          />
        </div>
        {error&&<span style={{color:'red'}}>{error}</span>}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            ref={emailRef}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            ref={messageRef}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }

  export default ContactForm;


