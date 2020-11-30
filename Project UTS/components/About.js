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

export default About = ({ navigation }) =>{
  return(
    
    <View style={{alignItems: "center", justifyContent: "center", flex: 1, paddingHorizontal: 16}}>
      <Text style= {{textAlign: "center", fontFamily: "Georgia", fontSize: 20}}>
      <Image
       source = {require('../assets/images/headbg.png')}
       style={{width: 350, height: 350}}
       resizeMode="contain"
      />
      For more information, please contact WhatsApp: 08123456789, Facebook: Arma Guitarshop, Instagram:            @arma_guitarshop
     
      </Text>
    </View>
  )
}