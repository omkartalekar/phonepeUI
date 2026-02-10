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
import LinearGradient from 'react-native-linear-gradient';
import HeaderBanner from './src/components/HeaderBanner';
import MoneyTransfers from './src/components/MoneyTransfers';
import RechargeBills from './src/components/RechargeBills';
import Loans from './src/components/Loans';
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
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <LinearGradient
        colors={['#F5A623', '#F5A623', 'transparent']}
        style={[styles.topSection, { paddingTop: safeAreaInsets.top }]}
      >
        <HeaderBanner />
      </LinearGradient>
      <MoneyTransfers />
      <HorizontalPromos />
      <RechargeBills />
      <Loans />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  topSection: {
    backgroundColor: '#F5A623',
  },
});

export default App;
