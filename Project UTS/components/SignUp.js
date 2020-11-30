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
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import colors from '../assets/colors/colors';

export default SignUp = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
  });

  const [email, onChangeEmail] = React.useState('');

  const [mail, onChangeMail] = React.useState('');

  const [password, onChangePassword] = React.useState('');

  return (
    <View>
<Image
       source = {require('../assets/images/logo.png')}
       style={{width: 300, height: 200}}
       resizeMode="contain"
      />
      <View style={styles.circleWrapper}>
        <View style={styles.whiteCircle}>

        </View>
      </View>

      <View style={styles.formWrapper}>
        <View style={styles.emailWrapper}>
          <Text style={styles.emailText}>Username</Text>
          <View style={styles.emailInputWrapper}>
            <TextInput
              style={styles.emailInput}
              onChangeText={(text) => onChangeEmail(text)}
              value={email}
            />
          </View>
        </View>
        <View style={styles.passwordWrapper}>
          <Text style={styles.passwordText}>E-mail</Text>
          <View style={styles.passwordInputWrapper}>
            <TextInput
              style={styles.passwordInput}
              onChangeText={(text) => onChangeMail(text)}
              value={mail}
            />
          </View>
        </View>
        <View style={styles.passwordWrapper}>
          <Text style={styles.passwordText}>Password</Text>
          <View style={styles.passwordInputWrapper}>
            <TextInput
              style={styles.passwordInput}secureTextEntry
              onChangeText={(text) => onChangePassword(text)}secureTextEntry
              value={password}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <View style={styles.button}>
          <Text style={styles.textButton}>Make Account</Text>
        </View>
      </View>
      <View style={styles.footerWrapper}>
        <Text style={styles.firstText}>
          Already have an account?
          <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
          <Text style={styles.secondText}>
            {"   Sign Up"}
          </Text>
        </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    top: -190,
    left: 110,
    color: colors.white,
    fontSize: 20,
    fontWeight: '900'
  },
  subTitle: {
    position: 'absolute',
    top: -150,
    left: 90,
    color: colors.white,
    fontFamily: 'Poppins',
    fontSize: 13
  },
  circleWrapper: {
    alignItems: 'center',
  },
  logo: {
    width: 65,
    height: 65,
    position: 'absolute',
    left: 18,
    top: 15,
  },

  formWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
  },

  emailText: {
    fontFamily: 'Poppins',
    marginBottom: 10,
    color: colors.grey
  },
  emailInput: {
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },

  passwordText: {
    fontFamily: 'Poppins',
    marginBottom: 10,
    color: colors.grey,
    marginTop: 10
  },
  passwordInput: {
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 30
  },
  button: {
    backgroundColor: colors.black,
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 40
  },
  textButton: {
    color: colors.white,
    fontFamily: 'Poppins',
    fontSize: 16
  },
  footerWrapper: {
    alignItems: 'center',
    marginTop: 20
  },
  firstText: {
    fontFamily: 'Poppins',
    paddingRight: 10
  },
  secondText: {
    color: colors.background
  }
});
