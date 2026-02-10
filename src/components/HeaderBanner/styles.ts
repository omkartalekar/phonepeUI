import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  bannerImage: {
    width: width,
    height: 250,
    marginTop: 10,
  },
});
