import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Icon } from "@rneui/themed";

const ProductDetailsScreen = ({ route, navigation }) => {
  const { paramKey, cartDetailParam, cartDetail, setCartDetail } = route.params;

  const windowWidth = Dimensions.get("window").width;

  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);

  const handleClick = (prod) => {
    setCartDetail([...cartDetail, prod]);

    // navigation.navigate("CartScreen",{cartDetailParam: cartDetail})
    navigation.navigate("CartScreen", {cartDetailParam: cartDetailParam})
  };

  const renderItem = () => {
    return (
      <View style={styles.imgBox}>
        <Image
          source={{ uri: paramKey.thumbnail }}
          width={windowWidth}
          height={200}
        />
        <View style={styles.heart}>
          <Icon name="heart" type="foundation" color="#FF8181" size={50} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.singleProduct}>
      <Text style={styles.topText}>{paramKey.title}</Text>
      <View style={styles.swipe}>
        <Carousel
          layout="tinder"
          layoutCardOffset={9}
          ref={isCarousel}
          data={paramKey.images}
          renderItem={renderItem}
          sliderWidth={windowWidth - 40}
          itemWidth={windowWidth - 40}
          inactiveSlideShift={0}
          useScrollView={true}
          onSnapToItem={(index) => setIndex(index)}
        />
        <Pagination
          dotsLength={paramKey.images.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 25,
            height: 10,
            marginHorizontal: 0,
            backgroundColor: "#F9B023",
          }}
          inactiveDotScale={0.6}
          tappableDots={true}
          inactiveDotStyle={{ backgroundColor: "#808080" }}
        />
      </View>
      <View style={styles.priceOff}>
        <Text style={styles.price}>${paramKey.price}</Text>
        <View style={styles.off}>
          <Text style={{ color: "#fff" }}>
            ${paramKey.discountPercentage} OFF
          </Text>
        </View>
      </View>
      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.btnOne} onPress={() => handleClick(paramKey)}>
          <Text>Add To Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnTwo}>
          <Text style={{color: "#fff"}}>Buy Now</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 30}}>
        <Text style={styles.detailText}>Details</Text>
        <Text style={{color:"#8891A5"}}>{paramKey.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  singleProduct: {
    backgroundColor: "#fff",
    padding: 20,
    height: Dimensions.get("screen").height,
  },
  topText: {
    color: "#1E222B",
    fontSize: 50,
    fontWeight: "800",
    marginBottom: 30
  },
  imgBox: {
    width: "100%",
    position: "relative",
  },
  heart: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 1,
  },
  priceOff: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  price: {
    fontSize: 20,
    color: "#2A4BA0",
  },
  off: {
    borderRadius: 70,
    backgroundColor: "#2A4BA0",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  btnGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30
  },
  btnOne: {
    width: 143,
    height: 56,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor : "#2A4BA0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  btnTwo: {
    width: 143,
    height: 56,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#2A4BA0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  detailText: {
    fontSize: 20,
  }
});

export default ProductDetailsScreen;
