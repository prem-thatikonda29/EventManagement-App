import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function EsportsPage() {
  const pressed = () => {
    // join now logic
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <Upcoming />
      <View
        style={{ alignSelf: "flex-start", flexDirection: "row", height: 52 }}
      >
        <Text
          style={{
            justifyContent: "flex-start",
            alignSelf: "flex-start",
            marginLeft: 28,
            marginTop: 25,
            fontSize: 20,
            fontWeight: "700",
            color: "#FBFBFB",
          }}
        >
          All Events
        </Text>
        <View style={{ justifyContent: "flex-end" }}>
          <MaterialCommunityIcons
            name="chevron-down"
            size={30}
            color="#CDCDCD"
          />
        </View>
      </View>

      <View style={styles.sessionContainer}>
        <Session />
        <Session />
      </View>
    </SafeAreaView>
  );
}

// COMPONENTS
const Upcoming = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/City.png")} style={styles.roboImage} />
      <Text style={[styles.sessionHeading, styles.sessionText]}>
        FIFA Championship
      </Text>
      <Text style={[styles.sessionTime, styles.sessionText]}>
        Date : 21st June, 2024
      </Text>
      <Text style={[styles.sessionTime, styles.sessionText]}>
        Venue : Console Gaming, Kharghar
      </Text>
      <TouchableOpacity>
        <Text style={styles.sessionJoin}>RSVP</Text>
      </TouchableOpacity>
    </View>
  );
};

const Session = () => {
  return (
    <View style={styles.session}>
      <View style={styles.doctorInfo}>
        <View style={styles.doctorPic}></View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>BGMI Tournament</Text>
        </View>
      </View>

      <View style={styles.sessionDetails}>
        <View style={styles.sessionDate}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <MaterialCommunityIcons name="calendar" size={20} color="#CDCDCD" />
            <Text style={{ color: "#707070" }}>31st March ‘24</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <MaterialCommunityIcons name="clock" size={20} color="#CDCDCD" />
            <Text style={{ color: "#707070" }}>12:00 PM - 3:00 PM</Text>
          </View>
        </View>

        <View style={styles.sessionButtons}>
          <TouchableOpacity style={[styles.button]}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button2]}>
            <Text
              style={[styles.buttonText, styles.buttonText2]}
              onPress={() => {
                alert("Added to Calendar!");
              }}
            >
              Add to Calendar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#6A3EA3",
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: "#333333",
    opacity: 0.8,
    borderRadius: 20,
    height: "24%",
    marginTop: "25%",
    padding: 30,
    justifyContent: "space-evenly",
    gap: 10,
    shadowColor: "#31572C",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  sessionText: {
    color: "#FBFBFB",
  },
  sessionHeading: {
    fontSize: 22,
    fontWeight: "800",
  },
  sessionDoctor: {
    fontSize: 14,
  },
  sessionTime: {
    fontSize: 14,
    fontWeight: "600",
  },
  sessionJoin: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FBFBFB",
    marginTop: 10,
  },
  sessionContainer: {
    width: "90%",
    flex: 1,
    marginTop: 20,
    shadowColor: "#E6CCB2",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    rowGap: 25,
  },
  session: {
    width: "100%",
    height: 200,
    backgroundColor: "#FFF6EB",
    borderRadius: 18,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  roboImage: {
    width: 150,
    height: 150,
    position: "absolute",
    top: -40,
    right : -20
  },
  doctorInfo: {
    width: "100%",
    height: "40%",
    borderBottomWidth: 1,
    borderBottomColor: "#D9D8D8",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  doctorPic: {
    width: "25%",
    alignItems: "center",
  },
  sessionDetails: {
    width: "100%",
    height: "60%",
    justifyContent: "space-around",
  },
  sessionDate: {
    flexDirection: "row",
    gap: 40,
    color: "#707070",
    // marginTop : 20
  },
  sessionButtons: {
    flexDirection: "row",
    gap: 40,
  },
  button: {
    width: 120,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#333",
    opacity: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    justifyContent: "center",
    alignItems: "center",
    width: 140,
    height: 50,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FBFBFB",
  },
  buttonText2: {
    color: "#573926",
  },
});

// export default StyledDivision;
