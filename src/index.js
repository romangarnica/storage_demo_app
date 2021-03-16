import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//import React, { useEffect, useState } from 'react';
//import { Storage, API, graphqlOperation } from 'aws-amplify'
//import { v4 as uuid } from 'uuid'
//import { withAuthenticator } from '@aws-amplify/ui-react'
////import Amplify, { Auth } from 'aws-amplify'
//import { createPicture as CreatePicture } from './graphql/mutations'
//import { listPictures as ListPictures } from './graphql/queries'
//import Amplify, {Auth} from 'aws-amplify';
//import config from './aws-exports';
//import reportWebVitals from './reportWebVitals';
//Amplify.configure(config);
//
//const {
//  aws_user_files_s3_bucket_region: region,
//  aws_user_files_s3_bucket: bucket
//} = config
//
//function App() {
//  const [file, updateFile] = useState(null)
//  const [pictureName, updatePictureName] = useState('')
//  const [pictures, updatePicture] = useState([])
//  useEffect(() => {
//    listPictures()
//  }, [])
//
//  // Query the API and save them to the state
//  async function listPictures() {
//    const pictures = await API.graphql(graphqlOperation(ListPictures))
//    updatePicture(pictures.data.listPictures.items)
//  }
//
//  function handleChange(event) {
//    const { target: { value, files } } = event
//    const fileForUpload = files[0]
//    updatePictureName(fileForUpload.name.split(".")[0])
//    updateFile(fileForUpload || value)
//  }
//
//  // upload the image to S3 and then save it in the GraphQL API
//  async function createPicture() {
//    if (file) {
//      const extension = file.name.split(".")[1]
//      const { type: mimeType } = file
//      const key = `images/${uuid()}${pictureName}.${extension}`      
//      const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
//      const inputData = { name: pictureName , image: url }
//
//      try {
//        await Storage.put(key, file, {
//          contentType: mimeType
//        })
//        await API.graphql(graphqlOperation(CreatePicture, { input: inputData }))
//      } catch (err) {
//        console.log('error: ', err)
//      }
//    }
//  }
//
//  return (
//    <div style={styles.container}>
//      <input
//        type="file"
//        onChange={handleChange}
//        style={{margin: '10px 0px'}}
//      />
//      <input
//        placeholder='Product Name'
//        value={pictureName}
//        onChange={e => updatePictureName(e.target.value)}
//      />
//      <button
//        style={styles.button}
//        onClick={createPicture}>Create Picture</button>
//
//      {
//        pictures.map((p, i) => (
//          <img
//            style={styles.image}
//            key={i}
//            src={p.image}
//          />
//        ))
//      }
//    </div>
//  );
//}
//
//const styles = {
//  container: {
//    width: 400,
//    margin: '0 auto'
//  },
//  image: {
//    width: 400
//  },
//  button: {
//    width: 200,
//    backgroundColor: '#ddd',
//    cursor: 'pointer',
//    height: 30,
//    margin: '0px 0px 8px'
//  }
//}
//reportWebVitals();
//export default withAuthenticator(App);