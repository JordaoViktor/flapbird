import React from 'react';
import { Image } from 'react-native';
import Stitch from '../assets/stitch.png'
const Bird = ({birdBottom, birdLeft}) => {
  const birdWidth = 60 
  const birdHeight = 60
  return (
    <Image style={{
      position:'absolute',
      // backgroundColor:'blue',
      width:birdWidth,
      height:60,
      left:birdLeft - (birdWidth/2),
      bottom:birdBottom - (birdHeight/2),
    }} source={Stitch}/>
  );
}

export default Bird;