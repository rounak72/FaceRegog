import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Clarifai from 'clarifai';
import Image from './Components/Image/Image';


const app = new Clarifai.App({
  apiKey: 'd6b62908d7f74bc6addaceb73d1ad1e4'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      leftCol: '',
      topRow : '',
      rightCol : '',
      bottomRow : ''
      


    }
  }
  calculateFaceLocation = (data) =>{
        
    const image = document.getElementById('inputImage');
    const width = Number(image.width)
    const height = Number(image.height)
    console.log(width ,height )
    console.log(data.left_col * width)
    // return{
        
    //     leftCol : data.left_col * width,
    //     topRow :  data.top_row * height, 
    //     rightCol : width - (data.right_col * width),
    //     bottomRow : height- (data.bottom_row * height)
    //   }

    this.setState({leftCol : data.left_col * width})
    this.setState({topRow :  data.top_row * height})
    this.setState({rightCol : width - (data.right_col * width)})
    this.setState({bottomRow : height- (data.bottom_row * height)})
  }

  displayBox = (data) =>{
    console.log(this.box)
    this.setState({box : data});
    
  }

  OnInputChange = (event) => {
    console.log(event.target.value);
    this.setState({ input: event.target.value });
  }

  OnSumbit = () => {
    console.log(this.state.input)

    app.models.initModel({ id: Clarifai.FACE_DETECT_MODEL })
      .then(generalModel => {
        return generalModel.predict(this.state.input);
      })
      .then(response => {
        var concepts = response['outputs'][0]['data']['regions'][0]['region_info']['bounding_box']
        console.log(concepts)
        // this.displayBox( this.calculateFaceLocation(concepts) )
        this.calculateFaceLocation(concepts)
      })

  }



  render() {
    return (
      <div>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm  OnInputChange={this.OnInputChange} OnSumbit={this.OnSumbit} />
        <Image picture={this.state.input} 
        leftCol={this.state.leftCol} 
        topRow={this.state.topRow} 
        rightCol={this.state.rightCol} 
        bottomRow={this.state.bottomRow}/>
      </div>
    );
  }
}

export default App;
