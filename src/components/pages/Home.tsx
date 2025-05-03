import Achievements from "../fragments/Achievements";
import DownloadApp from "../fragments/DownloadApp";
import Hero from "../fragments/Hero";
import ITLibrary from "../fragments/ITLibrary";
import Majors from "../fragments/Majors";

function Home() {
  return (
    <>
      <Hero />
      <Achievements
        data={{
          visitors: 2000,
          courseStudy: 150,
          volunteer: 60,
        }}
      />
      <Majors/>
      <ITLibrary/>
      <DownloadApp/>
    </>
  );
}

export default Home;
