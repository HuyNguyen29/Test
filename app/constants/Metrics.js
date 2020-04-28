import { Dimensions } from "react-native"
import { responsiveHeight, responsiveWidth } from "@utils/DimenUtils"

const { width, height } = Dimensions.get("window")

const Metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    icons: responsiveHeight(24),
    iconSmall: responsiveHeight(16),

}

export default Metrics
