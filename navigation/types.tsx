/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Signin: undefined;
  Signup: undefined;
  List: undefined;
  Detail: { screen: 'Profile' | 'Checklist' | 'Chat'; params: any };
  Settings: undefined;
};
