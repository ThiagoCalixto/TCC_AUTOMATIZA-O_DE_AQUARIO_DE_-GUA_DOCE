import React, { useCallback, useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore"; 

import { firestore } from '../../../firebase'
import { Input } from "@components/Input";
import { schemaPets } from "../../utils/formValidations/myPets";

import {
  Container,
  ProfileContainer,
  InputGroup,
  BackButton,
  Content,
  TextError,
  FormContent,
  AddButton,
  Pet,
  Pets,
  Text,
  Title,
  PetsList
} from "./styles";


interface PetsProps {
  name: string;
}
export function MyPets() {
  const navigation = useNavigation();
  const { COLORS } = useTheme();

  const [pets, setPets] = useState<PetsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  

  const handleGoBack = () => {
    navigation.goBack();
  };

  async function handleGetData (){
    setLoading(true)
    const querySnapshot = await getDocs(collection(firestore, "pets"));
    const myPets: PetsProps[] = []
    querySnapshot.forEach((doc) => {
      myPets.push(doc.data() as PetsProps)
    });
    setPets(myPets);
    // setLoading(false)
  }
   
  useFocusEffect(useCallback(() => {
    handleGetData()
  },[]))
  
  return (
    <Container paddingTop={getStatusBarHeight() + 40}>
      <BackButton onPress={() => handleGoBack()} activeOpacity={0.7}>
        <MaterialIcons name="chevron-left" size={40} color={COLORS.WHITE_900} />
      </BackButton>

      <Content>
        <ProfileContainer>
          <Formik
            initialValues={{
              name: "",
            }}
            onSubmit={(values, { resetForm }) => {
              setPets([...pets, { name:values.name }])
              resetForm({});
            }}
            validationSchema={schemaPets}
          >
            {({ handleSubmit, handleChange, errors, values, touched }) => (
                <FormContent>
                  <InputGroup>
                    <Input
                      label="Nome/Espécie:"
                      isRequired
                      placeholder="Digite aqui"
                      type="secondary"
                      autoCorrect={false}
                      autoFocus
                      autoCapitalize="none"
                      value={values.name}
                      onChangeText={handleChange("name")}
                      returnKeyType="done"
                    />
                    {errors.name && touched.name && (
                      <TextError>{errors.name}</TextError>
                    )}
                  </InputGroup>
                  <AddButton activeOpacity={0.7} onPress={() => handleSubmit()}>
                    <MaterialIcons name="add" size={30} color={COLORS.WHITE_900} />
                  </AddButton>
                </FormContent>
            )}
          </Formik>
        </ProfileContainer>
        
        <ActivityIndicator 
          animating={loading}
          color={COLORS.BUTTON}
          size='large'
      />
        <Pets>
          <Title>Meus pets</Title>
          
          {pets.length > 0 ? 
            <PetsList showsVerticalScrollIndicator={false}>
            {pets?.map(pet => (
              <Pet activeOpacity={0.7} key={pet.name} onPress={() => navigation.navigate('petDetails')}>
                <Text>{pet.name}</Text>
                <MaterialIcons name="chevron-right" size={24} color={COLORS.WHITE_900} />
              </Pet>
            ))}
            </PetsList> 
            : 
            <Text>Você ainda não tem pets cadastrado</Text>
          }
        </Pets>
       
      </Content>
    </Container>
  );
}
