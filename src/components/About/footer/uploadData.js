import React from 'react';
import { addCollectionAndDocuments } from '../../utils/firebase/firebase.utils'
import SHOP_DATA from '../../shop-data'

const TestUpload = () => {
  const handleUpload = async () => {
    try {
      await addCollectionAndDocuments('categories', SHOP_DATA);
      console.log('Data uploaded successfully');
    } catch (error) {
      console.error('Error uploading data to Firestore:', error);
    }
  };

  return (
    <button onClick={handleUpload}>Upload Data</button>
  );
};

export default TestUpload;
