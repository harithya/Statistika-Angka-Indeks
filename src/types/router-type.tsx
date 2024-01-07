import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PrepareData} from './app-types';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Calculate: {
    data: PrepareData[];
  };
  Info: undefined;
};

export type Props<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;
