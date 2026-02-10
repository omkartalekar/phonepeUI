import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingBottom: 10,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 3,
  },
  promoCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconText: {
    fontSize: 20,
    marginRight: 8,
  },
  promoText: {
    fontSize: 13,
    color: '#000',
  },
});
