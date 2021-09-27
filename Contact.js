import React from 'react';

export const ContactForm = function () {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    // const [forms, setForms]= React.useState('');

    function handleSubmit(event) {
        alert(name +' '+ 'merci pour votre message, vous aurez une réponse de notre part dans les plus bref délais.');
        event.preventDefault();

        const options = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
            }),
            
        }

        fetch("http://localhost:3000/contactSubmit", options)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                // setForms(false)
            });
    }
    return (
        <div>
            {/* {
                forms ? */}
                    <form onSubmit={handleSubmit} className="contact">
                        <div className="tocontact" >
                            <div>
                                <label htmlFor="name">Nom </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder='Votre nom'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />

                                <div>
                                    <br />
                                    <label htmlFor="email">E-mail  </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="votre e-mail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <br />
                                    <label htmlFor="message">Message  </label>
                                    <textarea
                                        id="message"
                                        placeholder="Votre message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)} />
                                    <br/>
                                    <br/>

                                    <button type="envoyer">Envoyer</button>

                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div />
                        <hr />

                     </form>
                    {/* :  */}
{/* 
                    <p className='reponse'>Votre message a été envoyé</p> */}
            {/* } */}
        </div>
    );
}
