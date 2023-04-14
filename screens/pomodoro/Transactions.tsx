import React,{FunctionComponent, useEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";
import { StyleSheet,View ,Text, Alert, TextInput, TouchableOpacity, ImageSourcePropType,Image,Button} from 'react-native';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { lsGetToken } from "../../common-utils/helper";
import { PomodoroActions } from "../../redux/actions";
import NumericInput from 'react-native-numeric-input'
import { Modal } from "./Modal";
import axios from "axios";
type Data = {
  image:ImageSourcePropType
}
const Add:Data = {
  image:require('../../assets/add.png'),
}
const Transactions:FunctionComponent=()=>{
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(!modalVisible);
  };
  
    return (
    
        <View >
           <View style={styles.container} >  
                     <Text style={{fontWeight:'bold',fontSize:30,textAlign:'center',marginTop:20,marginBottom:30}}>Transactions</Text>  
                     <View>
             </View> 
           </View>
           <View>
           <TouchableOpacity style={{ backgroundColor: '#F6D2F3',height:55,marginTop:50,marginHorizontal:20,borderRadius:10,borderWidth:1}} onPress={handleModal}>
                <View style={{flexDirection:'row',marginTop:8}}>
                <Text style={{textAlign: 'center',fontSize:25,color:'black',fontWeight:'600',marginLeft:100}}>Add transcation</Text>
                
                <Image source={Add.image} style={{width:30, height:30,marginLeft:20,backgroundColor:'#F6D2F3',marginTop:5,borderColor:'black',borderWidth:2,borderRadius:50}} />
                </View>
               </TouchableOpacity>
               <Modal isVisible={modalVisible}>
  <Modal.Container>
    <Modal.Header title="Transaction" />
    <Modal.Body>
    <View >
      <Text style={{color:'black',fontSize:17,marginTop:20}}>Category</Text>
        <TextInput
          nativeID="title"
          style={{borderColor:'black',borderWidth:1,marginTop:10}}
          // value={formData.title}
          // onChangeText={(e) => setFormData({ ...formData, title:e})}
        />
        <Text style={{color:'black',fontSize:17,marginTop:20}}>Amount</Text>
        <TextInput
          nativeID="title"
          style={{borderColor:'black',borderWidth:1,marginTop:10}}
          // value={formData.title}
          // onChangeText={(e) => setFormData({ ...formData, title:e})}
        />
        <Text style={{color:'black',fontSize:17,marginTop:20}}>Date</Text>
        <TextInput
          nativeID="title"
          style={{borderColor:'black',borderWidth:1,marginTop:10}}
          // value={formData.title}
          // onChangeText={(e) => setFormData({ ...formData, title:e})}
        />
         <Text style={{color:'black',fontSize:17,marginTop:20}}>Time</Text>
        <TextInput
          nativeID="title"
          style={{borderColor:'black',borderWidth:1,marginTop:10}}
          // value={formData.title}
          // onChangeText={(e) => setFormData({ ...formData, title:e})}
        />
       
        <View style={{flexDirection:'row'}}></View>
    </View>
      </Modal.Body>
    <Modal.Footer>
    <Button title="Press Me" onPress={handleModal} />
    </Modal.Footer>
  </Modal.Container>
</Modal>
                     </View>
                     <View style={{marginTop:30,flexDirection: 'column',borderWidth:2,borderColor:'black',backgroundColor:'white',height:70,marginHorizontal:20}}>
<View><Text style={{color:'red',textAlign:'center',fontSize:20,marginTop:5}}>-₹300</Text></View>
<View style={{flexDirection:'row',marginTop:5}}>
  <View style={{marginLeft:5}}>
  <Text style={{textAlign:'center',fontSize:18}}>On Food</Text>
  </View>
  <View style={{marginLeft:200,alignItems:'flex-end'}}>
  <Text style={{fontSize:18,fontWeight:'bold',alignItems:'flex-end'}}>05:30 PM</Text>
  </View>
</View>
</View>
         </View> 
       )
      
}
export default Transactions;
const styles = StyleSheet.create({  
  container:{   
      flexDirection: 'column',
      backgroundColor:'#F4E6E6',
      borderColor:'black',
      borderWidth:1,
      // set elements horizontally, try column.  
  }, 
  container2:{  
    flexDirection: 'row',
   // set elements horizontally, try column.  
},  
  container1:{ 
    flexDirection: 'column',
    backgroundColor:'white',
    marginHorizontal:25,
    marginTop:100,// set elements horizontally, try column.  
    height:480,
    elevation: 15,
    shadowColor: '#52006A',
}, 
  rounded:{  
    width:160,
    height:150,
    borderRadius:150/ 2,
    backgroundColor: '#B7E4EA' ,
    marginTop: '6%',
    alignSelf:'center',
    borderWidth:1
  },
  container4:{   
    marginTop:30,
    flexDirection: 'column',
    borderWidth:1,
    borderColor:'black',
    backgroundColor:'#B7E4EA',
    height:50,
    marginHorizontal:20,
    borderRadius:10
    // set elements horizontally, try column.  
}, 
}) 

    