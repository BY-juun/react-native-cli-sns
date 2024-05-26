import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Home = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Instagram</Text>
        </View>
        <View style={styles.right}>
          <FontAwesome name="plus-square-o" style={styles.plusIcon} />
          <Feather name="navigation" style={styles.featherIcon} />
        </View>
      </View>
      {/* <ScrollView>
        <Stories />
        <Post />
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {backgroundColor: 'white'},
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
  },
  right: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusIcon: {fontSize: 24, paddingHorizontal: 15},
  featherIcon: {fontSize: 24},
});
