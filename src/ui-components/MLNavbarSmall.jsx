/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MLNavbar from "./MLNavbar";
import { View } from "@aws-amplify/ui-react";
export default function MLNavbarSmall(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="93px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "MLNavbarSmall")}
    >
      <MLNavbar
        width="1440px"
        height="93px"
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
        backgroundColor="rgba(174,179,183,1)"
        {...getOverrideProps(overrides, "MLNavbarSmall34992688")}
      ></MLNavbar>
    </View>
  );
}
