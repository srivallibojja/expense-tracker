import React,{FunctionComponent, useEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";
import { StyleSheet,View ,Text} from 'react-native';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { lsGetToken } from "../../common-utils/helper";
import { PomodoroActions } from "../../redux/actions";
import { findDate } from "../../common-utils/date";

const Usage=()=>{
  const dispatch=useAppDispatch();
  const reduxPomodoroState = useAppSelector((state)=>state.Pomodoro)

  let [levelData,setLeveldata]=useState<{id: number; uid:string; level:string; percentage:string}>({
    id:0,
    uid:"0",
    level:"0",
    percentage:"0"
  })
  
  useEffect(() =>  {
   if(reduxPomodoroState.usage===undefined)
   dispatch(PomodoroActions.getSessions("1"));
   if(reduxPomodoroState.streak===undefined){
   dispatch(PomodoroActions.getLogin("1"));
   }
  },[]);

    return (
        <View>
          
          {reduxPomodoroState.usage !== undefined && (
            <React.Fragment>
                <View style={{flexDirection:"row"}}>
                  <Text style={{color:'#5655C6',marginLeft:"6%",marginTop:"15%"}}>Daily Streak: <Text style={{fontWeight:'bold'}}></Text></Text>
                  <View style={{flexDirection:"row",marginTop:40,marginLeft:45}}>
                  {
                    [...Array(6)].map((e,i)=>
                    <View key={i} >
                    <Text style={{textAlign:'center',color:'#5655C6',marginLeft:5}}>{findDate(6-i)[1]}</Text>
                    {
                      reduxPomodoroState.usage.session7.includes(findDate(6-i)[0])?
                      <View style={styles.rounded}></View>:
                      <View style={styles.rounded1}></View>
                    }
                    </View>
                  )
                  }
                   <View>
                   <Text style={{textAlign:'center',color:'#5655C6',marginLeft:5}}>{findDate(6-6)[1]}</Text>
                    {
                      reduxPomodoroState.usage.session7.includes(findDate(6-6)[0])?
                      <View style={styles.rounded}></View>:
                      <View style={styles.rounded1}></View>
                    }
                    </View>
                  </View>
                 </View>  
                 <Text style={styles.skyblue}># of days used (last 30 days): <Text style={{fontWeight:'bold'}}>{reduxPomodoroState.usage.days30}</Text></Text>
                 <Text style={styles.skyblue}># of days used (lifetime): <Text style={{fontWeight:'bold'}}>{reduxPomodoroState.usage.daysAll}</Text></Text>
                 <Text style={styles.skyblue}># of sessions (last 30 days): <Text style={{fontWeight:'bold'}}>{reduxPomodoroState.usage.session30}</Text></Text>
                 <Text style={styles.skyblue}># of sessions (lifetime): <Text style={{fontWeight:'bold'}}>{reduxPomodoroState.usage.sessionAll}</Text></Text>
                 
                 {
                   (reduxPomodoroState.usage.sessionAll*7.5)/60<=0?    
                   <Text style={styles.skyblue}>Total time saved with Focus Timer: <Text style={{fontWeight:'bold'}}>{reduxPomodoroState.usage.sessionAll*7.5}minutes</Text></Text>:
                   <Text style={styles.skyblue}>Total time saved with Focus Timer: <Text style={{fontWeight:'bold'}}>{(reduxPomodoroState.usage.sessionAll*7.5)/60}hours</Text></Text>
                 }
                
                </React.Fragment>
        )} 
       </View>
        
      );
      
}
export default Usage;
const styles = StyleSheet.create({  
    container:{  
        flex: 1, 
        justifyContent: 'space-between', 
        marginTop: '20%',
        flexDirection: 'row',// set elements horizontally, try column.  
    },  
    streak:{  
      flex: 1, 
      marginTop: '20%',
      flexDirection: 'column',// set elements horizontally, try column.  
  },  
    powderblue:{  
      marginLeft: '6%',
      color:'#5655C6'
    },  
    skyblue:{  
      marginLeft: '6%', 
      marginTop:'10%' ,
      color:'#5655C6'
    },  
    steelblue:{  
        width: 60,  
        height:100,  
        backgroundColor: 'steelblue',  
    } ,
    rounded:{  
      width:25,
      height:25,
      borderRadius:25/ 2,
      backgroundColor: '#5655C6', 
      marginLeft:5
  
    },rounded1:{  
      width:25,
      height:25,
      borderRadius:25/ 2,
      borderColor: "black",
      borderWidth:0.55,
      backgroundColor: 'white',
      marginLeft:5
  
    }
  }) 