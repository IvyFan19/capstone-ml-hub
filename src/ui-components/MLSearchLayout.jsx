/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, View } from "@aws-amplify/ui-react";
export default function MLSearchLayout(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="200px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "MLSearchLayout")}
    >
      <View
        width="1440px"
        height="200px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <Flex {...getOverrideProps(overrides, "SearchField")}></Flex>
      <Button
        position="absolute"
        top="60.5%"
        bottom="19.5%"
        left="31.25%"
        right="64.24%"
        backgroundColor="rgba(10,207,131,0.23)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Text"
        {...getOverrideProps(overrides, "Button35238192")}
      ></Button>
      <Button
        position="absolute"
        top="60.5%"
        bottom="19.5%"
        left="42.29%"
        right="52.22%"
        backgroundColor="rgba(245,217,188,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Image"
        {...getOverrideProps(overrides, "Button35238193")}
      ></Button>
      <Button
        position="absolute"
        top="60.5%"
        bottom="19.5%"
        left="53.61%"
        right="41.11%"
        backgroundColor="rgba(245,188,188,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Video"
        {...getOverrideProps(overrides, "Button35238194")}
      ></Button>
      <Button
        position="absolute"
        top="60.5%"
        bottom="19.5%"
        left="66.15%"
        right="28.58%"
        backgroundColor="rgba(184,206,249,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Audio"
        {...getOverrideProps(overrides, "Button35238195")}
      ></Button>
    </View>
  );
}
