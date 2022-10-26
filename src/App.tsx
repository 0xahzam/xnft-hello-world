import ReactXnft, { Text, View } from "react-xnft";

//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
});

export function App() {
  return (
    <View style={{display : "flex", gap:"20px", flexDirection : "column", background:"#FFFEE7"}}>

      <Text style={{color : "#46472A",  width:"100vw"}}>
      ello ello! my name is Ahzam — just an 18 y/o crafting the craft
      </Text>

      <Button style={{color : "#46472A", background:"#FFFFDD", paddingtop:"20px", border:"2px solid #C8C8A8", width:"100vw"}}>
      Twitter -> 0xahzam
      </Button>
    </View>
  );
}
