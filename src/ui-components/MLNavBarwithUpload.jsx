/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Icon, Text, View } from "@aws-amplify/ui-react";
export default function MLNavBarwithUpload(props) {
  const { overrides, ...rest } = props;
  const buttonThreeFiveZeroNineTwoFourEightOneOnClick = useAuthSignOutAction({
    global: false,
  });
  const buttonThreeFiveZeroNineTwoFourSixThreeOnClick = useNavigateAction({
    type: "url",
    url: "/upload",
  });
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
      {...getOverrideProps(overrides, "MLNavBarwithUpload")}
    >
      <View
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
        {...getOverrideProps(overrides, "MLNavbar")}
      >
        <View
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
          backgroundColor="rgba(245,245,245,1)"
          {...getOverrideProps(overrides, "Rectangle 1")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="347px"
          height="28px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="40.86%"
          bottom="29.03%"
          left="8.89%"
          right="67.01%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="ML Model Hub"
          {...getOverrideProps(overrides, "ML Model Hub")}
        ></Text>
        <View
          width="44px"
          height="26px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="38.71%"
          bottom="33.33%"
          left="3.68%"
          right="93.26%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "AWS_logo_RGB 1")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="43.52px"
            height="25.69px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="1.21%"
            left="0%"
            right="1.1%"
            {...getOverrideProps(overrides, "Group35092476")}
          >
            <Icon
              width="39.92px"
              height="13.43px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 39.91796875,
                height: 13.428466796875,
              }}
              paths={[
                {
                  d: "M10.4645 9.32857C10.4645 9.85714 10.5224 10.2857 10.6237 10.6C10.7395 10.9143 10.8842 11.2571 11.0868 11.6286C11.1592 11.7429 11.1882 11.8571 11.1882 11.9571C11.1882 12.1 11.1013 12.2429 10.9132 12.3857L10.0013 12.9857C9.87105 13.0714 9.74079 13.1143 9.625 13.1143C9.48026 13.1143 9.33553 13.0429 9.19079 12.9143C8.98816 12.7 8.81448 12.4714 8.66974 12.2429C8.525 12 8.38027 11.7286 8.22106 11.4C7.09211 12.7143 5.67369 13.3714 3.96579 13.3714C2.75 13.3714 1.78026 13.0286 1.07105 12.3429C0.361842 11.6571 0 10.7429 0 9.6C0 8.38572 0.434211 7.4 1.31711 6.65714C2.2 5.91429 3.37237 5.54286 4.86316 5.54286C5.35526 5.54286 5.86184 5.58571 6.39737 5.65714C6.9329 5.72857 7.4829 5.84286 8.06184 5.97143L8.06184 4.92857C8.06184 3.84286 7.83026 3.08571 7.38158 2.64286C6.91842 2.2 6.13684 1.98571 5.02237 1.98571C4.51579 1.98571 3.99474 2.04286 3.45921 2.17143C2.92368 2.3 2.40263 2.45714 1.89605 2.65714C1.66447 2.75714 1.49079 2.81429 1.38947 2.84286C1.28816 2.87143 1.21579 2.88571 1.15789 2.88571C0.955263 2.88571 0.853947 2.74286 0.853947 2.44286L0.853947 1.74286C0.853947 1.51429 0.882895 1.34286 0.955263 1.24286C1.02763 1.14286 1.15789 1.04286 1.36053 0.942857C1.86711 0.685714 2.475 0.471429 3.18421 0.3C3.89342 0.114286 4.64605 0.0285714 5.44211 0.0285714C7.16447 0.0285714 8.42369 0.414286 9.23421 1.18571C10.0303 1.95714 10.4355 3.12857 10.4355 4.7L10.4355 9.32857L10.4645 9.32857ZM4.58816 11.5C5.06579 11.5 5.5579 11.4143 6.07895 11.2429C6.6 11.0714 7.06316 10.7571 7.45395 10.3286C7.68553 10.0571 7.85921 9.75714 7.94605 9.41429C8.0329 9.07143 8.09079 8.65714 8.09079 8.17143L8.09079 7.57143C7.67105 7.47143 7.22237 7.38572 6.75921 7.32857C6.29605 7.27143 5.84737 7.24286 5.39869 7.24286C4.42895 7.24286 3.71974 7.42857 3.24211 7.81429C2.76447 8.2 2.5329 8.74286 2.5329 9.45714C2.5329 10.1286 2.70658 10.6286 3.06842 10.9714C3.41579 11.3286 3.92237 11.5 4.58816 11.5ZM16.2105 13.0429C15.95 13.0429 15.7763 13 15.6605 12.9C15.5447 12.8143 15.4434 12.6143 15.3566 12.3429L11.9553 1.3C11.8684 1.01429 11.825 0.828571 11.825 0.728571C11.825 0.5 11.9408 0.371429 12.1724 0.371429L13.5908 0.371429C13.8658 0.371429 14.054 0.414286 14.1553 0.514286C14.2711 0.6 14.3579 0.8 14.4447 1.07143L16.8763 10.5286L19.1342 1.07143C19.2066 0.785714 19.2934 0.6 19.4092 0.514286C19.525 0.428571 19.7276 0.371429 19.9882 0.371429L21.1461 0.371429C21.4211 0.371429 21.6092 0.414286 21.725 0.514286C21.8408 0.6 21.9421 0.8 22 1.07143L24.2868 10.6429L26.7908 1.07143C26.8776 0.785714 26.979 0.6 27.0803 0.514286C27.1961 0.428571 27.3842 0.371429 27.6447 0.371429L28.9908 0.371429C29.2224 0.371429 29.3526 0.485714 29.3526 0.728571C29.3526 0.8 29.3382 0.871429 29.3237 0.957143C29.3092 1.04286 29.2803 1.15714 29.2224 1.31429L25.7342 12.3571C25.6474 12.6429 25.5461 12.8286 25.4303 12.9143C25.3145 13 25.1263 13.0571 24.8803 13.0571L23.6355 13.0571C23.3605 13.0571 23.1724 13.0143 23.0566 12.9143C22.9408 12.8143 22.8395 12.6286 22.7816 12.3429L20.5382 3.12857L18.3092 12.3286C18.2368 12.6143 18.15 12.8 18.0342 12.9C17.9184 13 17.7158 13.0429 17.4553 13.0429L16.2105 13.0429ZM34.8092 13.4286C34.0566 13.4286 33.304 13.3429 32.5803 13.1714C31.8566 13 31.2921 12.8143 30.9158 12.6C30.6842 12.4714 30.525 12.3286 30.4671 12.2C30.4092 12.0714 30.3803 11.9286 30.3803 11.8L30.3803 11.0714C30.3803 10.7714 30.4961 10.6286 30.7132 10.6286C30.8 10.6286 30.8868 10.6429 30.9737 10.6714C31.0605 10.7 31.1908 10.7571 31.3355 10.8143C31.8276 11.0286 32.3632 11.2 32.9276 11.3143C33.5066 11.4286 34.0711 11.4857 34.65 11.4857C35.5618 11.4857 36.2711 11.3286 36.7632 11.0143C37.2553 10.7 37.5158 10.2429 37.5158 9.65714C37.5158 9.25714 37.3855 8.92857 37.125 8.65714C36.8645 8.38571 36.3724 8.14286 35.6632 7.91429L33.5645 7.27143C32.5079 6.94286 31.7263 6.45714 31.2487 5.81429C30.7711 5.18571 30.525 4.48571 30.525 3.74286C30.525 3.14286 30.6553 2.61429 30.9158 2.15714C31.1763 1.7 31.5237 1.3 31.9579 0.985714C32.3921 0.657143 32.8842 0.414286 33.4632 0.242857C34.0421 0.0714286 34.65 0 35.2868 0C35.6053 0 35.9382 0.0142857 36.2566 0.0571429C36.5895 0.1 36.8934 0.157143 37.1974 0.214286C37.4869 0.285714 37.7618 0.357143 38.0224 0.442857C38.2829 0.528571 38.4855 0.614286 38.6303 0.7C38.8329 0.814286 38.9776 0.928571 39.0645 1.05714C39.1513 1.17143 39.1947 1.32857 39.1947 1.52857L39.1947 2.2C39.1947 2.5 39.079 2.65714 38.8619 2.65714C38.7461 2.65714 38.5579 2.6 38.3118 2.48571C37.4868 2.11429 36.5605 1.92857 35.5329 1.92857C34.7079 1.92857 34.0566 2.05714 33.6079 2.32857C33.1592 2.6 32.9276 3.01429 32.9276 3.6C32.9276 4 33.0724 4.34286 33.3618 4.61429C33.6513 4.88572 34.1868 5.15714 34.954 5.4L37.0092 6.04286C38.0513 6.37143 38.804 6.82857 39.2526 7.41429C39.7013 8 39.9184 8.67143 39.9184 9.41429C39.9184 10.0286 39.7882 10.5857 39.5421 11.0714C39.2816 11.5571 38.9342 11.9857 38.4855 12.3286C38.0368 12.6857 37.5013 12.9429 36.879 13.1286C36.2276 13.3286 35.5474 13.4286 34.8092 13.4286Z",
                  fill: "rgba(37,47,62,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="47.72%"
              left="4.13%"
              right="4.14%"
              {...getOverrideProps(overrides, "Vector35092477")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="43.52px"
              height="9.67px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="62.34%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group35092478")}
            >
              <Icon
                width="39.69px"
                height="8.82px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 39.689453125,
                  height: 8.822509765625,
                }}
                paths={[
                  {
                    d: "M39.3441 3.50815C34.5823 6.97958 27.6638 8.82243 21.7152 8.82243C13.3783 8.82243 5.86648 5.77958 0.192792 0.722435C-0.255892 0.322435 0.149371 -0.220422 0.684897 0.0938641C6.82174 3.60815 14.3915 5.73672 22.2217 5.73672C27.5046 5.73672 33.3086 4.65101 38.6494 2.42244C39.4454 2.06529 40.1257 2.93672 39.3441 3.50815Z",
                    fill: "rgba(255,153,0,1)",
                    fillRule: "evenodd",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="8.79%"
                bottom="0%"
                left="0%"
                right="8.8%"
                {...getOverrideProps(overrides, "Vector35092479")}
              ></Icon>
              <Icon
                width="8.16px"
                height="7.93px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 8.15625,
                  height: 7.929931640625,
                }}
                paths={[
                  {
                    d: "M5.9651 2.12968C5.3572 1.35825 1.94141 1.75825 0.392725 1.94396C-0.0704333 2.00111 -0.142802 1.60111 0.276935 1.30111C2.99799 -0.584607 7.47036 -0.0417495 7.99141 0.586822C8.51246 1.22968 7.84667 5.64396 5.2993 7.75825C4.90852 8.08682 4.5322 7.91539 4.70588 7.48682C5.28483 6.07254 6.57299 2.88682 5.9651 2.12968Z",
                    fill: "rgba(255,153,0,1)",
                    fillRule: "evenodd",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="18.01%"
                left="81.26%"
                right="0%"
                {...getOverrideProps(overrides, "Vector35092480")}
              ></Icon>
            </View>
          </View>
        </View>
        <Button
          position="absolute"
          top="29.03%"
          bottom="27.96%"
          left="88.23%"
          right="5.73%"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          backgroundColor="rgba(92,102,112,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Logout"
          onClick={() => {
            buttonThreeFiveZeroNineTwoFourEightOneOnClick();
          }}
          {...getOverrideProps(overrides, "Button35092481")}
        ></Button>
      </View>
      <Button
        width="96px"
        height="40px"
        position="absolute"
        top="29.03%"
        bottom="27.96%"
        left="77.5%"
        right="15.83%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        backgroundColor="rgba(189,189,189,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Upload "
        onClick={() => {
          buttonThreeFiveZeroNineTwoFourSixThreeOnClick();
        }}
        {...getOverrideProps(overrides, "Button35092463")}
      ></Button>
    </View>
  );
}
