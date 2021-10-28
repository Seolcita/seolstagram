/** @format */

import firebase from 'firebase';
import React, { useState } from 'react';
import db, { storage } from '../firebase';

function ImageUpload({ username }) {
  const [caption, setCaption] = useState('');
  const [progress, setProgress] = useState(0);
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
        // console.log('PROGRESS >>>>>>>>>>>>', progress);
        setProgress(progress);
      },
      // Catch erorr
      (error) => {
        // console.log(error);
        alert(error.message);
      },
      // Complete function...
      storage
        .ref('images')
        .child(image.name)
        .getDownloadURL()
        .then((url) => {
          // console.log(url);
          //post image inside db
          db.collection('posts').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            caption: caption,
            imageUrl: url,
            username: username,
          });

          setProgress(0);
          setCaption('');
          setImage(null);
        })
    );
  };

  return (
    <div className="imageupload">
      <progress value={progress} max="100" />
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
