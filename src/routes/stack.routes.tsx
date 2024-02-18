import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { WelCome } from "@screens/WelCome";
import { Home } from "@screens/Home";
import { ProfileAccount } from "@screens/Profile";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";
import { ForgotPassword } from "@screens/ForgotPassword";
import { ResetPassword } from "@screens/ResetPassword";
import { ConfirmationPassword } from "@screens/ConfirmationPassword";
import { Routine } from "@screens/Routine";
import { MyPets } from "@screens/MyPets";
import { MyPetDetails } from "@screens/MyPets/Details";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="welcome">
      <Screen name="home" component={Home} />
      <Screen name="welcome" component={WelCome}/>
      <Screen name="profile" component={ProfileAccount} />
      <Screen name="signin" component={SignIn} />
      <Screen name="routine" component={Routine} />
      <Screen name="pets" component={MyPets} />
      <Screen name="petDetails" component={MyPetDetails} />
      <Screen name="signup" component={SignUp} />
      <Screen name="forgotPassword" component={ForgotPassword} />
      <Screen name="resetPassword" component={ResetPassword} />
      <Screen name="confirmationPassword" component={ConfirmationPassword} />
    </Navigator>
  );
}
