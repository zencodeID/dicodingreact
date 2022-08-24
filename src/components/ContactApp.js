// 1. kode sebelum ada perubahan
// import React from 'react';
// import ContactList from './ContactList';
// import { getData } from '../utils/data';
 
// function ContactApp() {
//  const contacts = getData();
 
//  return (
//    <div className="contact-app">
//      <h1>Daftar Kontak</h1>
//      <ContactList contacts={contacts} />
//    </div>
//  );
// }
 
 
// export default ContactApp;

//kode setelah adanya perubahan
import React from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data';
 
class ContactApp extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     contacts: getData(),
   }
 
   this.onDeleteHandler = this.onDeleteHandler.bind(this);
   //penambahan handler addbooks
   this.onAddContactHandler = this.onAddContactHandler.bind(this);
 }
 
 onDeleteHandler(id) {
   const contacts = this.state.contacts.filter(contact => contact.id !== id);
   this.setState({ contacts });
 }
 
 //penmbahan /edit ke 2 ,penambahan fitur add contacts
 onAddContactHandler({ name, tag }) {
  this.setState((prevState) => {
    return {
      contacts: [
        ...prevState.contacts,
        {
          id: +new Date(),
          name,
          tag,
          imageUrl: '/images/default.jpg',
        }
      ]
    }
  });
}

//  render() {
//    return (
//      <div className="contact-app">
//        <h1>Daftar Kontak</h1>
//        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
//      </div>
//    );
//  }
// }
 
// export default ContactApp;

render() {
  return (
    <div className="contact-app">
      <h1>Aplikasi Kontak</h1>
      <h2>Tambah Kontak</h2>
      <ContactInput addContact={this.onAddContactHandler} />
      <h2>Daftar Kontak</h2>
      <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
    </div>
  );
}
}

export default ContactApp;
