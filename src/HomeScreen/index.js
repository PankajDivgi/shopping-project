import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProductData(res.data.products);
        console.log(res.data.products);
      })
      .catch((error) => console.log("productData", error));
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View style={{ backgroundColor: "#2A4BA0" }}>
          <View style={styles.topHome}>
            <Text style={styles.userText}>Hey, Pankaj</Text>
            <Pressable onPress={() => navigation.navigate("CartScreen")}>
              <Icon
                name="shopping-bag"
                type="font-awesome-5"
                color="#fff"
                size={32}
              />
            </Pressable>
          </View>
          <View style={styles.inputBox}>
            <Icon name="search" type="font-awesome-5" color="#fff" size={22} />
            <TextInput
              style={styles.input}
              placeholder="Search Product"
              placeholderTextColor="#fff"
            />
          </View>
          <View style={styles.addressTime}>
            <View>
              <Text style={{ fontSize: 11, color: "#fff" }}>DELIVERY TO</Text>
              <Text style={{ fontSize: 14, color: "#fff" }}>
                Green Way 3000, Sylhet
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 11, color: "#fff" }}>WITHIN</Text>
              <Text style={{ fontSize: 14, color: "#fff" }}>1 Hour</Text>
            </View>
          </View>
        </View>
        <View style={styles.allProducts}>
          {productData.map((prod, i) => {
            return (
              <Pressable
                Key={prod.id + i}
                onPress={() => navigation.navigate("ProductDetailScreen")}
              >
                <View style={styles.products}>
                  <View style={styles.heart}>
                    <Icon
                      name="heart"
                      type="foundation"
                      color="#FF8181"
                      size={22}
                    />
                  </View>
                  <View style={styles.imageP}>
                    <Image source={require("../../assets/no-product.png")} />
                  </View>
                  <View style={styles.addPN}>
                    <View>
                      <Text style={styles.price}>${prod.price}</Text>
                      <Text style={styles.name}>{prod.title}</Text>
                    </View>
                    <Pressable
                      onPress={() => navigation.navigate("CartScreen")}
                    >
                      <Icon
                        name="pluscircle"
                        type="antdesign"
                        color="#2A4BA0"
                        size={22}
                      />
                    </Pressable>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  topHome: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
  },
  userText: {
    color: "#fff",
    fontSize: 28,
  },
  inputBox: {
    padding: 20,
    margin: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#153075",
    borderRadius: 50,
  },
  input: {
    backgroundColor: "#153075",
    width: "100%",
    paddingLeft: 10,
  },
  addressTime: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
  },
  allProducts: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  products: {
    position: "relative",
    width: 160,
    height: 194,
    borderRadius: 20,
    backgroundColor: "#F8F9FB",
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
  },
  heart: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  imageP: {
    display: "flex",
    alignItems: "center",
  },
  addPN: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 20,
    color: "#616A7D",
  },
  name: {
    color: "#616A7D",
    width: 90,
  },
});

export default HomeScreen;
