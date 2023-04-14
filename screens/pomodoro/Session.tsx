import React,{FunctionComponent} from "react";
import { StyleSheet,View,Text,Image, TouchableOpacity } from "react-native";
import { ImageSourcePropType } from 'react-native'
import { PomodoroActions } from '../../redux/actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
type Data = {
    image:ImageSourcePropType
 }
 const Minus:Data = {
    image:require('../../assets/minus.png'),
}
const Plus:Data = {
    image:require('../../assets/plus.png')
}
 
const Session:FunctionComponent=()=>{
    const dispatch = useAppDispatch();
    const reduxPomodoroState = useAppSelector((state) => state.Pomodoro);

    const handleDecrement = () => {
        dispatch(
            PomodoroActions.decreaseSessionValue(
              +reduxPomodoroState.records.timer - 1
            )
        );
        dispatch(
            PomodoroActions.resetTimer()
        )
    }
    const handleIncrement = () => {
        dispatch(
            PomodoroActions.increaseSessionValue(
              +reduxPomodoroState.records.timer + 1
            )
        );
        dispatch(
            PomodoroActions.resetTimer()
        )
    }
    return(
        <> 
        {reduxPomodoroState.records !== undefined && (
                <React.Fragment>
        <View style={{flexDirection:'row',marginTop:20, marginLeft:27}}>
        <TouchableOpacity 
         onPress={handleDecrement}
         disabled={
           reduxPomodoroState.busyIndicator ||
           +reduxPomodoroState.records.breakTime <= 1
         }>   
         <Image source={Minus.image} style={styles.powderblue}/>
         </TouchableOpacity >
         <Text style={{color:'#5655C6',marginTop:8,fontWeight:'bold',fontSize:20,paddingLeft:15}}>{reduxPomodoroState.records.timer}</Text>
         <TouchableOpacity 
         onPress={handleIncrement}
         disabled={
           reduxPomodoroState.busyIndicator ||
           +reduxPomodoroState.records.breakTime <= 1
         }>   
         <Image source={Plus.image} style={styles.steelblue}/>
         </TouchableOpacity >
    
         </View>
         </React.Fragment>
         )}
        </>
    )
}
export default Session;
const styles = StyleSheet.create({
    container:{  
        marginLeft:20,
        marginTop:'10%',
        flex: 1,  
        flexDirection: 'row',// set elements horizontally, try column.  
    },  
    container2:{  
        flex: 1,
        flexDirection: 'column',// set elements horizontally, try column.  
    },  
    powderblue:{ 
      color:'#5655C6',
      width:50,  
        height:50, 
        elevation: 15,
       shadowColor: '#52006A',
    },  
    steelblue:{  
        marginLeft:10,
        width:50,  
        height:50,  
        elevation: 15,
       shadowColor: '#52006A',
    } ,
    
  }) 