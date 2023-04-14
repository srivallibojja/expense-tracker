import React,{FunctionComponent} from "react";
import { StyleSheet,View,Text,Image, Button, TouchableOpacity } from "react-native";
import { ImageSourcePropType } from 'react-native'
import { PomodoroActions } from '../../redux/actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect, useRef } from 'react';
import {useClockify} from './useClockify'
import axios from 'axios';
type Data = {
    image:ImageSourcePropType
 }
 const Play:Data = {
    image:require('../../assets/play.png'),
}
const Redo:Data = {
    image:require('../../assets/Redo.png')
}
const Pause:Data = {
    image:require('../../assets/pause.png')
}

const Controls:FunctionComponent=()=>{
    const dispatch = useAppDispatch();
    const reduxPomodoroState = useAppSelector(
        (state) => state.Pomodoro
    );
    const bellSoundUrl : string = "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3";
    const clockifiedValue : string | undefined = useClockify(reduxPomodoroState.presentTimer);

    
    const handleReset = () => {
        dispatch(
            PomodoroActions.resetTimer()
        )
        
       
    }

    const postSession = async () => {
        const userId="1"
        await axios.post("https://calpal.xyz/pomodoroSessions/addSession",{
            uid: userId,
            sessionTime: reduxPomodoroState.records.timer,
            breakTime: reduxPomodoroState.records.breakTime
        })
    }

    const handlePlayPause = () => {
        dispatch(
            PomodoroActions.toggleIsBusyIndicator(!reduxPomodoroState.busyIndicator)
        )
    }

    const handleCount = () => {
        const userId="1"
        dispatch(
            PomodoroActions.startTimer(reduxPomodoroState.presentTimer-1)
        )
        if (reduxPomodoroState.presentTimer < 0) {
            if (reduxPomodoroState.timerLabel === 'Session') {
                dispatch(PomodoroActions.toggleTimerLabel("Break"))
              
                // when we are converting from break to session then one session is completed
                postSession()
                dispatch(PomodoroActions.getSessions("1"));
                dispatch(PomodoroActions.getLevels("1"));
            } else {
                dispatch(PomodoroActions.toggleTimerLabel("Session"))
                
            }
        }
    }
    
    useEffect(() => {
        if (reduxPomodoroState.busyIndicator) {
            let timerInterval = setInterval(() => {
                handleCount();
            }, 1000);
            return () => clearInterval(timerInterval);
        }
    })
    return(
        <>
        <View style={styles.container2}>
         <Text style={{fontSize:20,color:'white',marginLeft:'23%',marginTop:'18%'}}>Session</Text> 
         <Text style={{fontSize:35,color:'white',marginLeft:'18%',marginTop:'2%'}}>{clockifiedValue}</Text> 
         <View style={styles.container}>
         <TouchableOpacity onPress={handlePlayPause}>
         {!reduxPomodoroState.busyIndicator?      
         <Image source={Play.image} style={styles.powderblue}/>:
         <Image source={Pause.image} style={styles.powderblue}/>
         }
         </TouchableOpacity>
         <TouchableOpacity onPress={handleReset}>
         <Image source={Redo.image} style={styles.steelblue}/>
         </TouchableOpacity>
         </View>
         </View>
        </>
    )
}
export default Controls;
const styles = StyleSheet.create({
    container:{  
        flex: 1,  
        marginTop: '10%',
        flexDirection: 'row',// set elements horizontally, try column.  
    },  
    container2:{  
        flex: 1,
        marginLeft: '6%',  
        flexDirection: 'column',// set elements horizontally, try column.  
    },  
    powderblue:{ 
      marginLeft:'8%', 
      color:'#5655C6',
    }, 
    steelblue:{  
        marginLeft:'8%',
        width:60,  
        height:60,  
    },
    
  }) 