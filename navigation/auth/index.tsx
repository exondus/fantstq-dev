import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from 'screens/auth/landing/landingScreen';
import LoginScreen from 'screens/auth/login/loginScreen';
import RegisterScreen from 'screens/auth/register/registerScreen';
import PrivacyScreen from 'screens/auth/privacy/privacyScreen';
import TermsAndConditionsScreen from 'screens/auth/terms/termsScreen';
import ForgotPasswordScreen from 'screens/auth/forgot/forgotScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
      <Stack.Screen name="Terms" component={TermsAndConditionsScreen} />
      <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}
