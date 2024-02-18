import React, { useState, useCallback, useEffect } from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { format, fromUnixTime } from "date-fns";
import { useTheme } from "styled-components";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore"; 
import { optionsMenu } from "../../utils/mockMenuOptions";
import { useGetInitialsName } from "../../utils/formatNames";
import { shadow } from "../../utils/shadowContent";
import { useAuth } from "../../services/auth/auth";
import { firestore } from '../../../firebase'
import { Loading } from "@components/Loading";
import { AsyncStorageGetItem } from "../../utils/asyncStorage";
import { UpdateUserProps } from "../../services/users";

import {
  Container,
  Content,
  ProfileContainer,
  Title,
  Text,
  Profile,
  ImageProfile,
  BalanceContent,
  Balance,
  SemiTitle,
  DividerLine,
  MenuContainer,
  MenuContent,
  IconContainer,
  Option,
  ActionsContainer,
  ActionButton
} from "./styles";

type Reservation = 'full' | 'empty'

interface AquariumProps {
  fire: string;
  ph: number;
  reservatorio: Reservation;
  temperatura: number;
  turbidez: number;
  updatedAt: {seconds: number, nanoseconds: number};
}

interface RoutineProps {
  value: number;
  isValid: boolean;
}

interface ActionsProps {
  light: string;
  feeder: string;
}
export function Home() {
  const navigation = useNavigation();
  const { COLORS } = useTheme();
  const { initialName, letterName } = useGetInitialsName();
  
  
  const [lightOn, setLightOn] = useState(false);
  const [feederOn, setFeederOn] = useState(false);
  const [aquarium, setaquarium] = useState<AquariumProps>({} as AquariumProps)
  const [loading, setLoading] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  
  const [routines, setRoutines] = useState<RoutineProps>({} as RoutineProps);
  
  async function handleGetData (){
    const querySnapshot = await getDocs(collection(firestore, "aquarium"));
    querySnapshot.forEach((doc) => {
      setaquarium(doc.data() as AquariumProps);
    });
    const querySnapshotActions = await getDocs(collection(firestore, "actions"));
    querySnapshotActions.forEach((doc) => {
      const acts = doc.data() as ActionsProps
      setFeederOn(acts.feeder === 'on' ? true : false)
      setLightOn(acts.light === 'on' ? true : false)
    });
  }
   
  const handleGetSavedUserData = async () => {
    const result = await AsyncStorageGetItem('@TccAquarium:user')
    console.log(result)
    if(result) {
      const parsedUserData = JSON.parse(result);
      setUserName(parsedUserData);
    }
  };
  
  useFocusEffect(useCallback(() => {
    handleGetSavedUserData()
  },[]))
  
  useEffect(useCallback(() => {
    handleGetData()
  },[firestore]))
  
  async function handleTurnOnTheLights() {
    try {
      setLoading(true)
      const lightRef = doc(collection(firestore, "actions"), "pKQPULkAlwym7t0GCJMF");
    
      await updateDoc(lightRef, {
        light: lightOn ? 'off' : 'on'
      });
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  
  async function handleTurnOnTheFeeder() {
    try {
      setLoading(true)
      const feederRef = doc(collection(firestore, "actions"), "pKQPULkAlwym7t0GCJMF");
    
      await updateDoc(feederRef, {
        feeder: feederOn ? 'off' : 'on'
      });
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
   
  return (
    <Container paddingTop={getStatusBarHeight() + 40}>
      <Content>
        <ProfileContainer>
          <View style={{ alignItems: "flex-start" }}>
            <Title>Olá, {initialName('Tcc Project')}!</Title>
            <Text>Hoje é dia de trocar a água</Text>
           
          </View>
            <TouchableOpacity onPress={() => navigation.navigate("profile")} activeOpacity={0.7}>
              <Profile>
                <Title>{letterName(userName)}</Title>
              </Profile>
            </TouchableOpacity>
        </ProfileContainer>

        <BalanceContent style={shadow}>
          <Balance>
            <SemiTitle>Status do aquário</SemiTitle>
            <Text style={{ fontSize: 16 }}>Nível de turbidez: {aquarium.turbidez}</Text>
            <Text style={{ fontSize: 16 }}>Nível de Ph: {aquarium.ph}</Text>
            <Text style={{ fontSize: 16 }}>Temperatura da água: {aquarium.temperatura}º</Text>
            <Text style={{ fontSize: 16 }}>Nível do reservatório: {aquarium.reservatorio}</Text>
            <Text style={{ fontSize: 16 }}>Presença de fogo ou fumaça: {aquarium.fire}</Text>
            {/* <Text style={{ fontSize: 16 }}>Atualizado em: {format(fromUnixTime(aquarium?.updatedAt?.seconds), 'dd/MM/yyyy HH:mm')}</Text> */}
          </Balance>
        </BalanceContent>
  
        {/* <Loading 
        isActive={loading}
        type='Carregando'
        /> */}
        <ActivityIndicator 
          animating={loading}
          color={COLORS.BUTTON}
          size='large'
      />
        
        <MenuContainer>
          <MenuContent horizontal={true} showsHorizontalScrollIndicator={false}>
            {optionsMenu.map((option) => (
              <Option
                key={option.id}
                onPress={() => navigation.navigate(option.screen)}
                activeOpacity={0.7}
              >
                <IconContainer>
                  <MaterialIcons
                    name={option.urlImage}
                    size={30}
                    color={COLORS.TITLE}
                  />
                </IconContainer>
                <SemiTitle isMenuOption color={COLORS.TITLE}>
                  {option.title}
                </SemiTitle>
              </Option>
            ))}
          </MenuContent>
        </MenuContainer>
  
        <DividerLine isMenuOption />
  
        <SemiTitle
          isMenuOption
          style={{ marginRight: "auto", fontSize: 17 }}
          color={COLORS.TITLE}
        >
          Acões rápidas:
        </SemiTitle>
  
        <ActionsContainer>
          <ActionButton activeOpacity={0.7} isOn={lightOn} onPress={() => handleTurnOnTheLights()}>
            <MaterialCommunityIcons
              name={lightOn ? 'lightbulb-on' :'lightbulb-off'}
              size={20}
              color={COLORS.TITLE}
            />
            <Text style={{ fontSize: 14, marginLeft: 5 }}>Acender lâmpada</Text>
          </ActionButton>
          <ActionButton activeOpacity={0.7} isOn={feederOn} onPress={() => handleTurnOnTheFeeder()}>
            <MaterialCommunityIcons
              name={feederOn ? 'food-steak' :'food-steak-off'}
              size={20}
              color={COLORS.TITLE}
            />
            <Text style={{ fontSize: 14, marginLeft: 5 }}>Alimentador</Text>
          </ActionButton>
        </ActionsContainer>
      </Content>
    </Container>
  );
}
