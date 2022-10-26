import ReactXnft, { Text, View } from "react-xnft";

//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
});

export function App() {
  return (
    <View>
      <Text style={{color : "black"}}>First time tinkering with xNFT or actually anything sol related, this is cool, gonna play more around this
      happy building :)</Text>
      <Text style={{color : "black"}}>- ahzam</Text>
    </View>
  );
}
