import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Formik } from "formik";

import { schemaLogin } from "../../utils/formValidations/signupValidation";
import { Loading } from "@components/Loading";
import { useAuth } from "../../services/auth/auth"

import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import Banner from "../../assets/banner1.png";

import {
  Container,
  Title,
  BackButton,
  ImageContainer,
  Content,
  ForgotButton,
  Text,
  TextError,
} from "./styles";

export function SignIn() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const { signIn } = useAuth();

  const [loading, setLoading] = useState<boolean>(false);

  const handleGoBack = () => {
    navigation.goBack();
  };
  
  const handleSignIn = (email:string, password: string) => {
    try {
      setLoading(true);
      signIn({
        email,
        password
      })
      setLoading(false);
      navigation.navigate('home');
    } catch (error:any) {
      setLoading(false);
      const errorMessage = error.message;
      const errorCode = error.code;
      Alert.alert('Ocorreu um erro ao realizar essa operação, tente novamente.')
      console.log(errorMessage);
    }
  }

  return (
    <Container paddingTop={getStatusBarHeight() + 40}>
      <BackButton onPress={() => handleGoBack()}>
        <MaterialIcons
          name="chevron-left"
          size={40}
          color={COLORS.WHITE_900}
          activeOpacity={0.7}
        />
      </BackButton>

      <ImageContainer>
        <Image source={Banner} />
      </ImageContainer>

      <Loading 
        isActive={loading}
        type='Carregando'
      />
      
      <Content>
        <Title>Credenciais de acesso</Title>

        <Formik
          initialValues={{
            email: "dikezeko@gmail.com",
            password: "123456",
          }}
          onSubmit={(values, { resetForm }) => {
            setLoading(true);
            handleSignIn(values.email, values.password)
            resetForm({});
          }}
          validationSchema={schemaLogin}
        >
          {({ handleSubmit, handleChange, errors, values, touched }) => (
            <>
              <Input
                label="Email"
                isRequired
                placeholder="Digite aqui o seu email"
                type="secondary"
                autoCorrect={false}
                autoFocus
                autoCapitalize="none"
                value={values.email}
                onChangeText={handleChange('email')}
                returnKeyType="next"
              />
              {errors.email && touched.email && (
                <TextError>{errors.email}</TextError>
              )}
              <Input
                label="Senha"
                isRequired
                placeholder="Digite aqui a sua senha"
                type="secondary"
                autoCorrect={false}
                autoCapitalize="none"
                value={values.password}
                onChangeText={handleChange('password')}
                returnKeyType="send"
                secureTextEntry
              />
              {errors.password && touched.password && (
                <TextError>{errors.password}</TextError>
              )}
              <ButtonIcon
                type="primary"
                title="Confirmar e continuar"
                icon="login"
                onPress={() => handleSubmit()}
                style={{ marginTop: 20 }}
              />
            </>
          )}
        </Formik>

        {/* <ForgotButton
          onPress={() => navigation.navigate("forgotPassword")}
          activeOpacity={0.7}
        >
          <Text>Esqueci minha senha</Text>
        </ForgotButton> */}
      </Content>
    </Container>
  );
}
