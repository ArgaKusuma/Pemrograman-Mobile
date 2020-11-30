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

export default Main = ({ navigation }) => {

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('MyProfile')}>
        <View style={styles.subjectContainer}>
        
          <Image
            source={item.image}
          />
          <Text style={{marginTop: 5}}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
    <Image
       source = {require('../assets/images/headbg.png')}
       style={{width: 350, height: 100}}
       resizeMode="contain"
      />
      <View style={styles.header}>
      <Image style={styles.user} source={require('../assets/images/user.png')} />
      </View>
       <View style={{paddingHorizontal: 50}}><TouchableOpacity style={styles.profile} onPress={() => navigation.navigate('Myprofile')}><Text style={styles.profilesettings}>Profile</Text></TouchableOpacity></View>

      <View style={{marginTop: 30 ,width: 350, height: 400, backgroundColor: 'lightgrey'}}><Text style={styles.air}>Guitar Collections</Text>
      <Image source={require('../assets/images/music.png')}
       style={{width: 300, height: 200}}
       resizeMode="contain" /></View>
      <View style={{paddingHorizontal: 80}}>
      <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.about}><Text style={styles.abouttext}>About</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 50
  },
  user:{
    width: 100,
    height: 100,
  },
  profile:{
    backgroundColor: "black",
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
  },
  profilesettings:{
    color: "white",
    textAlign: "center",
    fontFamily: "Georgia",
  },
  about:{
    backgroundColor: "black",
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
  },
  abouttext:{
    color: "white",
    textAlign: "center",
    fontFamily: "Georgia",
  },
  air:{
    fontFamily: "Georgia",
    fontSize: 28,
    fontWeight: "bold"
  },
  header:{
    alignItems: "flex-end",
    flexDirection: "row",
  },
  addressButton: {
    marginTop: 30
  },
  searchConainer: {
    marginTop: 20
  },
  addressContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subjectHeader: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listContainer: {
    marginTop: 20
  },
  subjectContainer: {
    marginRight: 30,
    justifyContent:'center',
    textAlign: 'center',
    alignItems: 'center'
  }, 
  dealContainer: {
    marginTop: 20
  },
  dealWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footer: {
    zIndex: 2,
    backgroundColor: colors.creamBlue,
    height: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navItem: {
    marginRight: 25,
    marginLeft: 25
  },
  circleIcon: {
    position: 'absolute',
    top: 560,
    left: 160,
    zIndex: 3
  },
  shoppingLogo: {
    marginLeft: 15,
    marginTop: -50,
  }
});
