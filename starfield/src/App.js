import Starfield from "react-starfield";

function App() {
  return (
    <div className="App">
      <Starfield
        starCount={5000}
        starColor={[255, 255, 255]}
        speedFactor={0.5}
        backgroundColor="black"
      />
      {/* Other components */}
    </div>
  );
}

export default App;
