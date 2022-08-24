// 1.kode sebelum dirubah

// import React from 'react';
// import ContactItem from './ContactItem';
 
// function ContactList({ contacts }) {
//  return (
//    <div className="contact-list">
//      {
//        contacts.map((contact) => (
//          <ContactItem key={contact.id} {...contact} />
//        ))
//      }
//    </div>
//  );
// }
 
// export default ContactList;

// 2.penambahan kode handle onDelete
import React from 'react';
import ContactItem from './ContactItem';
 
function ContactList({ contacts, onDelete }) {
  return (
    <div className="contact-list">
      {
        contacts.map((contact) => (
          <ContactItem 
          key={contact.id}
          id={contact.id}
          onDelete={onDelete}
          {...contact} />
        ))
      }
    </div>
  );
}
 
export default ContactList;