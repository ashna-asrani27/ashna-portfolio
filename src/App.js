import { Route, Switch } from "react-router"
import { ThemeProvider } from "styled-components"
import { AboutPage } from "./components/AboutPage"
import { InterestsPage } from "./components/InterestsPage"
import { Main } from "./components/Main"
import { MySkillsPage } from "./components/MySkillsPage"
import { lightTheme } from "./components/Themes"
import { WorkPage } from "./components/WorkPage"
import GlobalStyle from "./globalStyles"

function App() {
  return <div>
    {/* <Main/> */}
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/ashna-portfolio" component={Main} />

        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/skills" component={MySkillsPage}  />
        <Route exact path="/interests" component={InterestsPage} />
        <Route exact path="/work" component={WorkPage} />


      </Switch>
    </ThemeProvider>
    {/* <h1>Ashna Asrani</h1> */}
  </div>

}

export default App

