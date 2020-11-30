import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  ScrollView
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useFonts } from 'expo-font';
import colors from '../assets/colors/colors';

const Myprofile=({navigation})=>{
  return(
    <View>
      <Image
       source = {require('../assets/images/headbg.png')}
       style={{width: 350, height: 100}}
       resizeMode="contain"
      />
        <Image
          style={{width: 100, height: 100, }} source={require('../assets/images/user.png')}/>
          <View style={{justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
          <View>
          <Text style={{borderWidth: 1, borderColor: "black"}}>Ida Bagus Gede Arga Kusuma</Text>
          <Text style={{borderWidth: 1, borderColor: "black"}}>gusargakusuma30@gmail.com</Text>
          <Text style={{borderWidth: 1, borderColor: "black"}}>0895330440439</Text>
          <Text style={{borderWidth: 1, borderColor: "black"}}>Gianyar, Bali</Text>
          </View>
      </View>
    </View>
  )
}

export default Myprofile;
