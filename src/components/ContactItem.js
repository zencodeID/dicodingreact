// 1. sebelum dibuat tombol delete (kode awal)

// import React from 'react';
// import ContactItemBody from './ContactItemBody';
// import ContactItemImage from './ContactItemImage';
 
// function ContactItem({ imageUrl, name, tag }) {
//  return (
//    <div className="contact-item">
//      <ContactItemImage imageUrl={imageUrl} />
//      <ContactItemBody name={name} tag={tag} />
//    </div>
//  );
// }
 
// export default ContactItem;


// 2. Perubahan kode untuk menampilkan button delete
import React from 'react';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
// perubahannya ini
import DeleteButton from './DeleteButton';
 
function ContactItem({ imageUrl, name, tag, id, onDelete }) {
 return (
   <div className="contact-item">
     <ContactItemImage imageUrl={imageUrl} />
     <ContactItemBody name={name} tag={tag} />
     {/* perubahannya ini */}
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}
 
export default ContactItem;
