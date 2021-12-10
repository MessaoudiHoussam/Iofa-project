import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Colors from "../src/depen/Colors";
//import firebaseUtil from "../utlis/firebaseUtil";
import Icon from "react-native-vector-icons/FontAwesome";
import UploadItemsOrder from "../src/depen/UploadItemsOrder";
//import { color } from "react-native-reanimated";
import UploadItemsOrderAr from "../src/depen/UploadItemsOrderAr";
//import { TouchableOpacity } from 'react-native-gesture-handler';

const WidthItem = Dimensions.get("window").width / 2 - 30;

export default function HomeScreen({ navigation }) {



  /* const SingOut = () => {
     firebaseUtil.LogOut().catch((e) => {
       console.log("Sign Out", e);
       alert("Somthing wrong");
     });
     
   };
   */

  const [ar, setAr] = useState(false);

  const categories = ["cat", "cat02"];

  const changeLang = () => {
    setAr(!ar)
  }

  const Card = ({ ServiceItem }) => {
    let navigationRoute = `${ServiceItem.navigatTo}`
    return (

      <TouchableOpacity style={styles.CardItem}
        onPress={() => navigation.navigate(navigationRoute, ServiceItem)}
      >
        <View style={styles.CardItemContainer}>
          <View style={styles.CardItemContainerTopIcon}>
            <Icon name="arrow-right" size={19} color={Colors.green} />
          </View>
        </View>

        <View style={styles.CardItemImage}>
          <Image
            source={ServiceItem.img}
            //style={{ flex: 1, resizeMode: "contain" }}
            style={styles.CardItemImageimg}
          />
        </View>
        <Text style={styles.CardTitle}>{ServiceItem.name}</Text>
      </TouchableOpacity>


    );
  };

  return (
    <SafeAreaView style={styles.HomeScreen}>
      <View style={styles.HomeScreenHeader}>
        <View style={styles.HomeScreenHeaderContainer}>
          <Icon name="envira" color={Colors.green} size={28} />
          <Text style={styles.HeaderLogo}> IOFA</Text>
        </View>

        <View style={styles.notificatonContainer}

        >

          <Text style={styles.Lang} onPress={() => changeLang()}>
            {ar ? `AR` : `FR`}
          </Text>


          <View style={styles.notificatonIcon}>

            <Icon
              onPress={() => { } /*navigation.navigate("Notifications")*/}
              name="bell"
              size={27}
              color="orange"
            />
          </View>

          <View style={styles.notificatonNumber}>
            <Text style={styles.notificatonNumberText}> 1 </Text>
          </View>
        </View>
      </View>

      <View style={styles.HomeScreenSearchBar}>
        <View style={styles.HomeScreenSearchContainer}>
          <Icon
            name="search"
            style={{ marginLeft: 19 }}
            size={24}
            color="grey"
          />

          <TextInput
            placeholder="Search"
            placeholderTextColor={Colors.grey}
            style={styles.HomeScreenSearchInput}
          />
        </View>
        <TouchableOpacity style={styles.HomeScreenHomburgerbtn}>
          <Icon name="bars" color={Colors.white} size={30} />
        </TouchableOpacity>
      </View>
      {/* <FlatList numColumns={2} data={UploadItemsOrder}  renderItem={(item) => <Card SerItem={item} ></Card>   } /> */}
      <FlatList
        style={styles.FlatListStyle}
        numColumns={2}
        data={!ar ? UploadItemsOrder : UploadItemsOrderAr}
        renderItem={({ item }) => {
          return <Card ServiceItem={item} />;
        }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 15,
          paddingBottom: 30,
        }}
      />
    </SafeAreaView>
  );
}

//<Button title ="SingOut" onPress={()=> SingOut()} />
const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  HomeScreenHeader: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  HomeScreenHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  HeaderLogo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#00b300",
  },
  HomeScreenSearchBar: {
    marginTop: 30,
    flexDirection: "row",
    marginBottom: 10,
  },
  HomeScreenSearchContainer: {
    height: 50,
    backgroundColor: Colors.light,
    borderRadius: 8,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  HomeScreenSearchInput: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.dark,
    flex: 1,
  },
  HomeScreenHomburgerbtn: {
    marginLeft: 10,
    height: 45,
    width: 45,
    backgroundColor: Colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  CardItem: {
    height: 210,
    backgroundColor: Colors.light,
    width: WidthItem,
    marginHorizontal: 2,
    borderRadius: 10,
    marginTop: 18,
    padding: 15,
    display: 'flex',
  },
  FlatListStyle: {},
  CardItemContainer: {
    alignItems: "flex-end",
  },
  CardItemContainerTopIcon: {
    width: 25,
    height: 25,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddd",
  },
  CardItemImage: {
    height: 100,
    alignItems: "center",
  },
  CardItemImageimg: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },

  CardTitle: {
    fontSize: 17,
    color: Colors.green,
    textAlign: 'center',
    fontWeight: "700",
    marginTop: 14,
  },
  notificatonContainer: {
    position: "relative",
    minWidth: 60
  },
  notificatonIcon: {
    position: "absolute",
    right: 8,
    top: 0,
  },

  notificatonNumber: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    position: "absolute",
    right: 0,
    top: -4,
  },

  notificatonNumberText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
  },
  Lang: {
    fontSize: 20,
    fontWeight: '700',
    position: "absolute",
    right: 50,

  }
});