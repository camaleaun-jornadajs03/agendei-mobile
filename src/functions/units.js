import { Dimensions } from "react-native";

const Units = {
  rem(value) {
    const { width } = Dimensions.get("window");
    const baseWidth = 393;
    return value * (width / baseWidth);
  }
};

export default Units;
