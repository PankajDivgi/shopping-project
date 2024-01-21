import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const CartScreen = ({ route, navigation }) => {
  const { cartDetailParam } = route.params;
  // const myArray = Object.entries(cartDetailParam);
  console.log("cartDetailParam", cartDetailParam);
  // console.log("myArray",myArray);
  const totalPrice = cartDetailParam.reduce((acc, product) => acc + product.price, 0)
  const [subTotal, setsubTotal] = React.useState(totalPrice);
  return (
    <ScrollView>
      {cartDetailParam.map((eachCart) => {
        return (
          <View style={styles.cartEachInfo}>
            <Image
              source={{ uri: eachCart.thumbnail }}
              width={50}
              height={50}
            />
            <View style={{ marginTop: 20 }}>
              <Text>{eachCart.title}</Text>
              <Text>${eachCart.price}</Text>
            </View>
            {/* <View>
              <TouchableOpacity><Text>-</Text></TouchableOpacity>
              <View><Text></Text></View>
              <TouchableOpacity><Text>+</Text></TouchableOpacity>
            </View> */}
          </View>
        );
      })}
      <View
        style={{ backgroundColor: "#F8F9FB", padding: 20, borderRadius: 30 }}
      >
        <View>
          <View style={styles.prices}>
            <Text>Subtotal</Text>
            <Text>${subTotal}</Text>
          </View>
          <View style={styles.prices}>
            <Text>Delivery</Text>
            <Text>$2.00</Text>
          </View>
          <View style={styles.prices}>
            <Text>Total</Text>
            <Text>${subTotal+2}</Text>
          </View>
        </View>
        <View style={styles.checkBtnsP}>
          <TouchableOpacity style={styles.btnCheckout}>
            <Text style={{ color: "#fff" }}>Proceed To checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cartEachInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#bfbff2",
  },
  checkBtnsP: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  btnCheckout: {
    width: "90%",
    height: 56,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#2A4BA0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  prices: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 10,
  },
});

export default CartScreen;
