import ReactXnft, { Text, View, Tab } from "react-xnft";

//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
});

export function App() {
  return (
    <View style = {{ height : "100%" }}>
      <Tab.Navigator
        options={({ route }) => {
          return {
            tabBarIcon: ({ focused }) =>{
              if (route.name === "Eth") {
                return <Tab.Icon element={ <View><Text>Eth</Text></View>} />
               } 
               else{
                return ( 
                <Tab.Icon element={ <View><Text>Sol</Text></View>} />
                );
              }
            }, 
          };
        }}
        >
          <Tab.Screen 
          name="Eth"
          component={() => <Eth/>}
          />

          <Tab.Screen 
          name="Sol"
          component={() => <Sol/>}
          />
          </Tab.Navigator>
    </View>
  );
}

function Eth() {
  return(
    <View style = {{
      background :"pink",
      height : "100%"
    }}>
      <Text>
        Eth
      </Text>
    </View>
  )
}

  function Sol() {
    return(
      <View style = {{
        background :"Orange",
        height : "100%"
      }}>
        <Text>
          Sol
        </Text>
      </View>
    )
  }

