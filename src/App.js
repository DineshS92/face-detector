import React from 'react';
import './App.css';
// import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import ImageForm from './components/ImageForm/ImageForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecog from './components/FaceRecog/FaceRecog';
import Signin from './components/Signin/Signin';
import Signup from './components/SignUp/SignUp';

const app = new Clarifai.App({
  apiKey: '2d76a8156878404783e6888cd460a9d8'
});

const particleOpt = {
  particles: {
    color: {
      value: '#000000',
    },
    links: {
      color: "#000000",
    },
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imgUrl: '',
      box: [],
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    });
  }

  calcFaceLocation = (data) => {
    const image = document.getElementById('target');
    const width = Number(image.width);
    const height = Number(image.height);
    const clarFace = data.outputs[0].data.regions.map((bbObject) => {
      return {
        leftCol: bbObject.region_info.bounding_box.left_col * width,
        topRow: bbObject.region_info.bounding_box.top_row * height,
        rightCol: width - (bbObject.region_info.bounding_box.right_col * width),
        bottomRow: height - (bbObject.region_info.bounding_box.bottom_row * height)
      }
    });
    // console.log(width, height);
    // console.log(clarFace);
    // return {
    //   leftCol: clarFace.left_col * width,
    //   topRow: clarFace.top_row * height,
    //   rightCol: width - (clarFace.right_col * width),
    //   bottomRow: height - (clarFace.bottom_row * height),
    // }
    return clarFace;
  }

  displayFaceBox = (box) => {
    // console.log(box);
    this.setState({box: box});
  }

  onInputChange = (e) => {
    this.setState({input: e.target.value});
  }

  onButSubmit = () => {
    this.setState({imgUrl: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(response => {
        // console.log(response.outputs[0].data.regions);
        if(response) {
          fetch('http://localhost:3000/image', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count }));
          })
        }
        this.displayFaceBox(this.calcFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    this.setState({route: route});
    if(route === 'signout') {
      this.setState({isSignedIn: false});
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
  }

  render() {
    const { isSignedIn, box, imgUrl, route } = this.state;
    let image;
    if (imgUrl !== '') {
      image = <FaceRecog box={box} imgUrl={imgUrl} />;
    }
    else {
      image = '';
    }
    return (
      <div className="App">
        <Particles className='particles' params={particleOpt} />
        <Navigation 
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}/>
        {route === 'home'
        ? <div>
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageForm onInputChange={this.onInputChange} onButSubmit={this.onButSubmit}/>
            {image}
          </div> 
        : (
            ((route === 'signin' || route === 'signout') && !isSignedIn)
            ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            : <Signup loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }
        {/* <FaceRecog box={this.state.box} imgUrl={this.state.imgUrl} /> */}
      </div>
    );
  }
}

export default App;
