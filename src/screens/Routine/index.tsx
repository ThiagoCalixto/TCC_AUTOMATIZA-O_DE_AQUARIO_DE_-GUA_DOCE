import React, { useState } from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";

import { ButtonIcon } from "../../components/ButtonIcon";
import { routines } from "../../utils/mockRoutinesList";
import { Input } from "@components/Input";
import {
  schemaRoutineLight,
  schemaRoutineFeedling,
} from "../../utils/formValidations/routineValidation";

import {
  Container,
  ProfileContainer,
  InputGroup,
  Text,
  BackButton,
  Content,
  TextError,
  ActionsContainer,
  ActionButton,
  FormContent,
  FormGroup
} from "./styles";
import { Formik } from "formik";

export function Routine() {
  const navigation = useNavigation();
  const { COLORS } = useTheme();

  const [selectedRoutine, setSelectedRoutine] = useState("");

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container paddingTop={getStatusBarHeight() + 40}>
      <BackButton onPress={() => handleGoBack()} activeOpacity={0.7}>
        <MaterialIcons name="chevron-left" size={40} color={COLORS.WHITE_900} />
      </BackButton>

      <Content>
        <ProfileContainer>
          <SelectDropdown
            data={routines}
            onSelect={(selectedItem, index) => {
              setSelectedRoutine(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            defaultButtonText="Selecione uma opção"
            buttonStyle={{
              width: "100%",
              borderRadius: 8,
              backgroundColor: COLORS.PRIMARY_700,
            }}
            buttonTextStyle={{ color: COLORS.WHITE_900 }}
          />
        </ProfileContainer>

        <ActionsContainer>
          <ActionButton isSelected={selectedRoutine === "Luz"}>
            <MaterialCommunityIcons
              name={
                selectedRoutine === "Luz" ? "lightbulb-on" : "lightbulb-off"
              }
              size={20}
              color={COLORS.TITLE}
            />
            <Text style={{ fontSize: 14, marginLeft: 5 }}>Acender lâmpada</Text>
          </ActionButton>
          <ActionButton isSelected={selectedRoutine === "Alimentador"}>
            <MaterialCommunityIcons
              name={
                selectedRoutine === "Alimentador"
                  ? "food-steak"
                  : "food-steak-off"
              }
              size={20}
              color={COLORS.TITLE}
            />
            <Text style={{ fontSize: 14, marginLeft: 5 }}>Alimentador</Text>
          </ActionButton>
        </ActionsContainer>

        <Formik
          initialValues={{
            turnOn: "",
            turnOff: "",
            firstFeedling: "",
            secondFeedling: "",
          }}
          onSubmit={(values, { resetForm, setFieldError }) => {
            // resetForm({});
          }}
          // validate={validateForm}
          validationSchema={selectedRoutine === "Luz" ? schemaRoutineLight : schemaRoutineFeedling}
        >
          {({ handleSubmit, handleChange, errors, values, touched }) => (
            <FormGroup>
              <FormContent>
                {selectedRoutine === "Luz" && (
                  <>
                    <InputGroup>
                      <Input
                        label="Acender às:"
                        isRequired
                        placeholder="00:00"
                        type="secondary"
                        autoCorrect={false}
                        autoFocus
                        autoCapitalize="none"
                        value={values.turnOn}
                        onChangeText={handleChange("turnOn")}
                        returnKeyType="next"
                      />
                      {errors.turnOn && touched.turnOn && (
                        <TextError>{errors.turnOn}</TextError>
                      )}
                    </InputGroup>
                    <InputGroup>
                      <Input
                        label="Apagar às:"
                        isRequired
                        placeholder="00:00"
                        type="secondary"
                        autoCorrect={false}
                        autoFocus
                        autoCapitalize="none"
                        value={values.turnOff}
                        onChangeText={handleChange("turnOff")}
                        returnKeyType="next"
                      />
                      {errors.turnOff && touched.turnOff && (
                        <TextError>{errors.turnOff}</TextError>
                      )}
                    </InputGroup>
                  </>
                )}
                {selectedRoutine === 'Alimentador'  &&(
                  <>
                  <InputGroup>
                    <Input
                      label="1ª Alimentação:"
                      isRequired
                      placeholder="00:00"
                      type="secondary"
                      autoCorrect={false}
                      autoFocus
                      autoCapitalize="none"
                      value={values.firstFeedling}
                      onChangeText={handleChange("firstFeedling")}
                      returnKeyType="next"
                    />
                    {errors.firstFeedling && touched.firstFeedling && (
                      <TextError>{errors.firstFeedling}</TextError>
                    )}
                  </InputGroup>
                  <InputGroup>
                    <Input
                      label="2ª Alimentação:"
                      isRequired
                      placeholder="00:00"
                      type="secondary"
                      autoCorrect={false}
                      autoFocus
                      autoCapitalize="none"
                      value={values.secondFeedling}
                      onChangeText={handleChange("secondFeedling")}
                      returnKeyType="next"
                    />
                    {errors.secondFeedling && touched.secondFeedling && (
                      <TextError>{errors.secondFeedling}</TextError>
                    )}
                  </InputGroup>
                </>
                )}
              </FormContent>
              {selectedRoutine !== '' && (
                <ButtonIcon
                type="primary"
                title="Confirmar e continuar"
                icon="login"
                onPress={() => handleSubmit()}
                style={{ marginTop: 20 }}
              />
              )}
            </FormGroup>
          )}
        </Formik>
      </Content>
    </Container>
  );
}
