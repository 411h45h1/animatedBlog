import React from "react";
import { Image, Text, View, FlatList, Dimensions } from "react-native";
import { data } from "../../data";
import { SharedElement } from "react-navigation-shared-element";
import TouchableScale from "react-native-touchable-scale";

const MainScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <View style={{ flex: 1 }}>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          //   style={{ paddingHorizontal: 30 }}
          contentContainerStyle={{
            alignItems: "center",
            marginTop: 20,
          }}
          renderItem={({ item }) => {
            return (
              <View>
                <View>
                  <TouchableScale
                    activeScale={0.9}
                    tension={50}
                    friction={1}
                    useNativeDriver
                    onPress={() =>
                      navigation.push("DetailScreen", { data: item })
                    }
                  >
                    <SharedElement id={`item.${item.id}.photo`}>
                      <Image
                        source={{ uri: item.image }}
                        style={{
                          width: width - 90,
                          height: height - 450,
                          marginVertical: 10,
                          borderRadius: 14,
                        }}
                        resizeMode="cover"
                      />
                    </SharedElement>

                    <SharedElement
                      id={`item.${item.id}.text`}
                      style={{
                        width: width - 90,
                        position: "absolute",
                        bottom: 90,
                        left: 10,
                        paddingHorizontal: 10,
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 24,
                          fontWeight: "bold",
                          lineHeight: 28,
                        }}
                      >
                        {item.title}
                      </Text>
                    </SharedElement>

                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        position: "absolute",
                        bottom: 20,
                        left: 20,
                      }}
                    >
                      <SharedElement id={`item.${item.id}.profilePic`}>
                        <Image
                          source={{ uri: item.profilePic }}
                          style={{
                            width: 50,
                            height: 50,
                            borderRadius: 10,
                            marginRight: 14,
                          }}
                          resizeMode="cover"
                        />
                      </SharedElement>

                      <View>
                        <SharedElement id={`item.${item.id}.username`}>
                          <Text
                            style={{
                              color: "white",
                              fontSize: 16,
                              fontWeight: "bold",
                            }}
                          >
                            {item.username}
                          </Text>
                        </SharedElement>
                        <SharedElement id={`item.${item.id}.readtime`}>
                          <Text style={{ color: "white", fontSize: 14 }}>
                            {item.readtime} read
                          </Text>
                        </SharedElement>
                      </View>
                    </View>
                  </TouchableScale>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default MainScreen;
