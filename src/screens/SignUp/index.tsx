import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Formik } from 'formik';
import { Alert, Image } from "react-native";
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Loading } from "@components/Loading";

import { schema } from '../../utils/formValidations/signupValidation';
import { CreateAccountService, CreateUserProps } from "../../services/users";
import Banner from "../../assets/banner1.png";

import {
  Container,
  ImageContainer,
  Title,
  Content,
  TextError,
  BackButton,
  ContentContainer,
} from "./styles";

export function SignUp() {
  const navigation = useNavigation();
  const { COLORS } = useTheme();
  
  const [loading, setLoading] = useState<boolean>(false);
  
  const handleSignUp = async (data: CreateUserProps): Promise<void> => {
    setLoading(true)
    try {
      await CreateAccountService({
        name: data.name,
        email: data.email,
        cpf: data.cpf,
        password: data.password
      });
      setLoading(false);
      showMessage({
        message: 'Seu cadastro realizado com sucesso!',
        type: 'success'
      });
      navigation.navigate('signin')
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      const err = JSON.parse(error.response.request._response);
      if(err.message && err.code !== 500){
        // Alert.alert('Atenção',`${err.message}`);
        showMessage({
          message: `Atenção ${err.message}`,
          type: 'danger'
        });
      } 
      
      Alert.alert('Ocorreu um erro ao realizar essa operação, tente novamente');
    }
  }
  
  const handleGoBack = () => {
    navigation.goBack();
  };
  
  return (
    <Container paddingTop={getStatusBarHeight() + 40}>
      <BackButton onPress={() => handleGoBack()}>
        <MaterialIcons name="chevron-left" size={40} color={COLORS.WHITE_900} activeOpacity={0.7}/>
      </BackButton>
      
      <ImageContainer>
        <Image source={Banner} />
      </ImageContainer>
      <Loading 
        isActive={loading}
        type='Carregando'
      />
      <ContentContainer>
        <Title>
          Faça seu cadastro na{"\n"} plataforma
        </Title>
      
        <Formik
          initialValues={{
            name: '',
            email: '',
            cpf: '',
            password: '',
            password_confirmation: '',
          }}
          onSubmit={(values, { resetForm }) => {
            handleSignUp(values)
            // resetForm({});
          }}
          validationSchema={schema}
          >
           {({ handleSubmit, handleChange, errors, values, touched }) => ( 
            <Content>
              <Input
                placeholder="Digite aqui o seu nome"
                type="secondary"
                borderColor={errors.name && touched.name ? COLORS.ERROR : COLORS.PRIMARY_900}
                secureTextEntry={false}
                returnKeyType="next"
                autoFocus
                label="Nome"
                onChangeText={handleChange('name')}
                value={values.name}
                isRequired />
              {errors.name && touched.name && (
                <TextError>
                  {errors.name}
                </TextError>
              )}
              <Input
                placeholder="Digite aqui o seu email"
                type="secondary"
                borderColor={errors.email && touched.email ? COLORS.ERROR : COLORS.PRIMARY_900}
                label="Email"
                secureTextEntry={false}
                autoCapitalize="none"
                returnKeyType="next"
                isRequired
                onChangeText={handleChange('email')}
                value={values.email} />
              {errors.email && touched.email && (
                <TextError>
                  {errors.email}
                </TextError>
              )}
              <Input
                placeholder="Digite aqui o seu cpf"
                type="secondary"
                borderColor={errors.cpf && touched.cpf ? COLORS.ERROR : COLORS.PRIMARY_900}
                label="CPF"
                secureTextEntry={false}
                autoCapitalize="none"
                returnKeyType="next"
                isRequired
                onChangeText={handleChange('cpf')}
                value={values.cpf} />
              {errors.cpf && touched.cpf && (
                <TextError>
                  {errors.cpf}
                </TextError>
              )}
              <Input
                placeholder="Digite sua senha"
                type="secondary"
                borderColor={errors.password && touched.password ? COLORS.ERROR : COLORS.PRIMARY_900}
                label="Sua senha"
                returnKeyType="next"
                secureTextEntry
                isRequired
                value={values.password}
                onChangeText={handleChange('password')}
                />
              {errors.password && touched.password && (
                <TextError>
                  {errors.password}
                </TextError>
              )}
              
            <ButtonIcon
                type="primary"
                title="Confirmar e continuar"
                icon="login"
                onPress={() => handleSubmit()}
                style={{ marginTop: 20 }} />
            </Content>
          )}
        </Formik>
      </ContentContainer>
      
    </Container>
  );
}
