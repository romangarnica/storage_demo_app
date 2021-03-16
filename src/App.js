import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import { Component } from 'react';
import { createUserModel } from './graphql/mutations';
import { listUserModels } from './graphql/queries'

class App extends Component {
  state = {fileUrl: '', file:'', filename:''}
  user = {
    name: 'test name',
    lastname: 'test last Name',
    address: 'some address lorem ipsum',
    cellphone: '123456788'
  }

  users = API.graphql(graphqlOperation(listUserModels))
  //state = {fileUrl: ''}
   handleChange = e => {
    const file = e.target.files[0]
    this.setState({
      fileUrl: URL.createObjectURL(file),
      file,
      filename: file.name
    })
    console.log(this.state)
  } 
  saveFile = () => {
    Storage.configure({ level: 'private' });
    Storage.put(this.state.filename, this.state.file)
      .then(() => {
        console.log('successfuly saved file!')
        console.log(this.state.filename);
        console.log(this.state.file);
        console.log(this.state.fileUrl);
        this.setState({fileUrl:'',file:'',filename:''})
      })
      .catch(err => {
        console.log('error uploading file!', err)
      })
  }
  componentDidMount() {
    Storage.get('image02.jpg','image01.jpg')
    .then(data => {
      this.setState({
        fileUrl: data
      })
    })
    .catch(err => {
      console.log("Error fetching image!",err);
     })
  }

  saveUserModel() {
    API.graphql(graphqlOperation(createUserModel, {input: {name: 'test name23',
                                                lastname: 'test last Name34',
                                                address: 'some address lorem ipsum56',
                                                cellphone: '123456788'}}));
    console.log('User saved successfully');
    console.log(this.users);
  }
  render(){
  return (
    <div className="App">
        <h1>Meltzer-Hellrung</h1>
        <form>
          <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
          <hr></hr>

           <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required></input>

          <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required></input>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>
    <button onClick={this.saveUserModel}>Save User</button>
        </form>
        <p>{this.listUserModels}</p>
        <input type='file' onChange={this.handleChange} />        
        <button onClick={this.saveFile}>Save File</button> 
        <img src={this.state.fileUrl} />
        <br>
        </br>
        <br></br>
        
    </div>
  );
}
}

//export default withAuthenticator(App, {includeGreetings:true})

export default App;
