/** @format */

import firebase from 'firebase';
import React, { useState } from 'react';
import db, { storage } from '../firebase';

//CSS
import './ImageUpload.scss';

function ImageUpload({ username }) {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Progress Bar function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      // Catch erorr
      (error) => {
        alert(error.message);
      },
      // Complete function...
      storage
        .ref('images')
        .child(image.name)
        .getDownloadURL()
        .then((url) => {
          //post image inside db
          db.collection('posts').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            caption: caption,
            imageUrl: url,
            username: username,
          });

          setCaption('');
          setImage(null);
        })
    );
  };

  return (
    <div className="imageUpload">
      <input
        type="text"
        onChange={(e) => setCaption(e.target.value)}
        value={caption}
        placeholder="Enter a caption..."
      />
      <input type="file" onChange={handleChange} />
      <button type="submit" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}

export default ImageUpload;
