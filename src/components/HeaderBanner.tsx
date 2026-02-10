import { Image, StyleSheet, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function HeaderBanner() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/banner.png')} 
        style={styles.bannerImage}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  bannerImage: {
    width: width,
    height: 250,
    marginTop: 10,
  },
});
