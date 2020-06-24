import React, { useState, useEffect } from "react";
import ContactCard from "./components/ContactCard";
import { generate as id } from "shortid";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=11")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setContacts(data.results);
      });
  }, []);

  return (
    <>
      {contacts.map((contact) => (
        <ContactCard
          Avatar={contact.picture.large}
          key={id()}
          Name={contact.name.first + " " + contact.name.last}
          Email={contact.email}
          Age={contact.dob.age}
        />
      ))}
    </>
  );
}

export default App;
