import { StyleSheet } from "react-native";
import { Metrics, Colors } from "./Constants";

export default StyleSheet.create({
  sp_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F05038"
  },
  sp_title: {
    fontFamily: "Wonderbar",
    color: "white",
    letterSpacing: 7.5
  },
  header_wrapper: {
    paddingTop: 30,
    width: Metrics.WIDTH,
    backgroundColor: Colors.PURE_ORANGE,
    paddingHorizontal: 10,
    justifyContent: "center",
    flexDirection: "row",
    paddingBottom: 10
  },
  sc_wrapper: {
    width: Metrics.WIDTH * 0.95,
    height: 250,
    justifyContent: "flex-end",
    marginVertical: 10,
    flex: 1,
    overflow: "hidden",
    borderRadius: 12
  },
  sc_cont_wrapper: {
    backgroundColor: "rgba(1,1,1,0.7)",
    width: Metrics.WIDTH * 0.95,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  sc_cont: {
    color: "white",
    fontSize: 18,
    fontWeight: "400"
  }
});
