/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, View, ScrollView } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import HeaderBanner from './src/components/HeaderBanner';
import MoneyTransfers from './src/components/MoneyTransfers';
import RechargeBills from './src/components/RechargeBills';
import PromoSlider from './src/components/PromoSlider';
import Loans from './src/components/Loans';
import LoanPromo from './src/components/LoanPromo';
import HorizontalPromos from './src/components/HorizontalPromos';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#F5A623" />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.topSection, { paddingTop: safeAreaInsets.top }]}>
        <HeaderBanner />
      </View>
      <MoneyTransfers />
      <HorizontalPromos />
      <RechargeBills />
      <PromoSlider/>
      <Loans />
      <LoanPromo />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  topSection: {
    backgroundColor: '#F5A623',
  },
});

export default App;
