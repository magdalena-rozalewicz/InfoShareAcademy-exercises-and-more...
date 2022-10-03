import Texts from "./helper/texts";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { Footer } from "./components/Footer/Footer"
import { HomePage } from './components/Home/HomePage';
import { Projects } from './components/Projects/Projects';
import { Contact } from "./components/Contact/Contact";
import { AboutMe } from './components/AboutMe/AboutMe';
import { StyledWrapper } from './styled/StyledWrapper';
import { trips } from "./helper/trips.data";



function App() {
  return (
    <BrowserRouter>
      <StyledWrapper>
        <Nav title={Texts.TITLE.T_NAV} home={Texts.TITLE.T_HOME} contact={Texts.TITLE.T_CONTACT} projects={Texts.TITLE.T_PROJECTS} about={Texts.TITLE.T_ABOUT} />
        <Routes>
          <Route path="/" element={<HomePage title={Texts.TITLE.T_HOME} content1={Texts.CONTENT.HOME.C_TEXT1} content2={Texts.CONTENT.HOME.C_TEXT2} content3={Texts.CONTENT.HOME.C_TEXT3} />} />
          <Route path="/aboutme" element={<AboutMe trips={trips} title={Texts.TITLE.T_ABOUT} content1={Texts.CONTENT.ABOUT.C_TEXT1} content2={Texts.CONTENT.ABOUT.C_TEXT2} />} />
          <Route path="/projects" element={<Projects title={Texts.TITLE.T_PROJECTS} contentH1={Texts.CONTENT.PROJECTS.HOBBITON.C_TEXT1} contentH2={Texts.CONTENT.PROJECTS.HOBBITON.C_TEXT2} contentM1={Texts.CONTENT.PROJECTS.MOAREKI.C_TEXT1} contentM2={Texts.CONTENT.PROJECTS.MOAREKI.C_TEXT2} contentA1={Texts.CONTENT.PROJECTS.AUCLAND.C_TEXT1} contentA2={Texts.CONTENT.PROJECTS.AUCLAND.C_TEXT2} />} />
          <Route path="/contact" element={<Contact title={Texts.TITLE.T_CONTACT} content1={Texts.CONTENT.CONTACT.C_TEXT1} content2={Texts.CONTENT.CONTACT.C_TEXT2} content3={Texts.CONTENT.CONTACT.C_TEXT3} />} />
        </Routes>
        <Footer descr1={Texts.FOOTER.F_TEXT1} descr2={Texts.FOOTER.F_TEXT2} />
      </StyledWrapper>
    </BrowserRouter>
  );
};

export default App;
