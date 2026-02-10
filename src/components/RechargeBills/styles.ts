import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  section: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 0,
    marginBottom: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  item: {
    alignItems: 'center',
    width: 80,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#e8e8e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconText: {
    fontSize: 28,
  },
  itemText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#000',
  },
  promoRow: {
    flexDirection: 'row',
    gap: 10,
  },
  mainCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  promoText: {
    fontSize: 14,
    color: '#000',
    flex: 1,
  },
  cardIcon: {
    fontSize: 24,
    marginLeft: 10,
  },
  moreCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'center',
  },
  moreText: {
    fontSize: 14,
    color: '#7c3aed',
    fontWeight: '600',
  },
});
