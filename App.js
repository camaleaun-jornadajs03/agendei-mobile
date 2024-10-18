import Login from "./src/screens/login/login.jsx";
import Account from "./src/screens/account/account.jsx";
import AbaHome from "./src/screens/abahome/abahome.jsx";
import AbaCalendar from "./src/screens/abacalendar/abacalendar.jsx";
import AbaProfile from "./src/screens/abaprofile/abaprofile.jsx";
import Main from "./src/screens/main/main.jsx";
import Services from "./src/screens/services/services.jsx";
import Schedule from "./src/screens/schedule/schedule.jsx";
import { Text, TouchableOpacity, View } from "react-native";
import Units from "./src/functions/units";

// 24+384+24=432
// 24+345+24=393
function App() {
  // console.log(Units.rem(56));
  return <View style={{flex:1,justifyContent:"center",alignItems:"center",gap:0}}>
    <TouchableOpacity style={{width:Units.rem(393),height:Units.rem(56),backgroundColor:"black",justifyContent:"center"}}>
      <Text style={{color:"white",textAlign:"center",fontSize:Units.rem(24)}}>Full</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:Units.rem(345),height:Units.rem(56),backgroundColor:"black",justifyContent:"center"}}>
      <Text style={{color:"white",textAlign:"center",fontSize:Units.rem(24)}}>FAB</Text>
    </TouchableOpacity>
    <View style={{flexDirection:"row",paddingStart:Units.rem(24),paddingEnd:Units.rem(24)}}>
      <TouchableOpacity style={{flex:1,height:Units.rem(56),backgroundColor:"black",justifyContent:"center"}}>
        <Text style={{color:"white",textAlign:"center",fontSize:Units.rem(24)}}>Container</Text>
      </TouchableOpacity>
    </View>
  </View>;
}

export default App;