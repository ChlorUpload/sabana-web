import { TopNavigation } from "componenets/About/TopNavigation";
import Footer from "componenets/Footer";
import Vertical from "componenets/Vertical";
import { AutoScrollViewer } from "sabana-music";

export default function About() {
  return (
    <Vertical>
      <TopNavigation></TopNavigation>
      <AutoScrollViewer
        sheetKey="sheet-key"
        title="AutoScrollViewer"
        url="https://opensheetmusicdisplay.github.io/demo/sheets/MuzioClementi_SonatinaOpus36No3_Part1.xml"
      ></AutoScrollViewer>
      <Footer></Footer>
    </Vertical>
  );
}
