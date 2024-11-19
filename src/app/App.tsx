import { ChannelsPage } from "@/pages/channels";
import { attachEvents } from "./model/attachEvents";
attachEvents();

function App() {
  return (
    <>
      <ChannelsPage />
    </>
  );
}

export default App;
