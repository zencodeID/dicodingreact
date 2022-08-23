import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './components/ContactApp';
 
// styling
import './styles/app.css';
 
const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);

// 1. ContactApp (merah) : Sebagai parent yang menampung seluruh UI yang ditampilkan, termasuk lokasi di mana data contacts berada.
// 2. ContactList (kuning) : Sebagai container dalam membuat list contact.
// 3. ContactItem (hijau) : Sebagai container dalam menampilkan item contact.
// 4. ContactItemImage (biru) : Menampilkan gambar contact.
// 5. ContactItemBody (ungu) : Menampilkan data nama dan tag sosial media dari kontak.


 
 
