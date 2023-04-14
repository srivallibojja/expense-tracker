import React, { FunctionComponent } from 'react'
import { View ,Text, TouchableOpacity,StyleSheet, ImageSourcePropType,Image} from 'react-native';
import {  useAppDispatch, useAppSelector } from '../../redux/hooks';
import { PomodoroActions } from '../../redux/actions';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

type Data = {
    image:ImageSourcePropType
}
const Progress:Data = {
    image:require('../../assets/progress.png')
}
const ProgressS:FunctionComponent=()=>{
    const reduxPomodoroState = useAppSelector(
        (state) => state.Pomodoro
    );
    return(
       <View style={{marginLeft:160,marginTop:15}}>
       <AnimatedCircularProgress
  size={40}
  width={35}
  fill={100}
  tintColor="black"
  onAnimationComplete={() => console.log('onAnimationComplete')}
  backgroundColor="black" />
       </View>
    )
}

const styles = StyleSheet.create({
   
  
    powderblue:{ 
      color:'#5655C6',
      width:50,  
        height:50, 
    },  
    steelblue:{  
        
        width:100,  
        height:20,  
    } ,
    
  }) 

export default ProgressS