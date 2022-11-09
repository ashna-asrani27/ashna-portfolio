import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import { Moon, YinYang } from './AllSvgs';
import {FaPrayingHands} from 'react-icons/fa'
import Intro from './Intro';
import {motion} from 'framer-motion'

const Contact = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top:2 rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,h3,h4,h5,h6 {
    font-family: 'Karla',sans-serif;
    font-weight: 500;
  }
`;
const Container = styled.div`
  padding:2rem;
`;
const Interests = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top:50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%,-50%);
  text-decoration: none;
  z-index: 1;
`;
const Work = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  position: absolute;
  top:50%;
  left:calc(1rem + 2vw);
  transform: translate(-50%,-50%) rotate(-90deg) ;
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;

`;

const About = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const Skills = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`

const Center = styled.button`
position:absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click? '92%' : '50%'};
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child
{
  animation:${rotate} infinite 1.5s linear;
}

&>:last-child
{
  display: ${props => props.click ? 'none' : 'inline-block'};
  padding-top:1rem;
}
`;

const DarkDiv = styled.div`
  position: absolute;
  top:0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${props => props.click ? '50%' : '0%'};
  height: ${props => props.click ? '100%':'0%'};
  z-index: 1;
  ///* property name | duration | easing function | delay */
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

export const Main = () => {
  const [click,setClick] = useState(false);
  const handleClick = () => {
    console.log(click);
    setClick(!click);
  }
  return (
    <MainContainer>
    <DarkDiv click={click}/>

    
      <Container>
      <PowerButton />
        <LogoComponent theme={click ? 'dark' : 'light'} />
        <SocialIcons theme={click ? 'dark' : 'light'}/>
        <Center click={click} onClick={() => handleClick()}>
          <Moon  width={click ? 120 : 200} height={click? 120 :  200} fill='currentColor'/>
          {/* <FaPrayingHands size={150}/> */}
          {/* <YinYang width={150} height={150} fill='currentColor'/> */}
          
          <span><h4>Namaste! Click to know who am I!</h4></span>
           {/* <span> <h4>Click to know who am I!</h4></span> */}
        </Center>
        <Contact target="_blank" to={{ pathname: "mailto:asraniashna27@gmail.com" }}>
          <motion.h2
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          >
            Let's Connect!
          </motion.h2>
        </Contact>
        <Interests to="/interests">
          <motion.h2
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          >
            Interests
          </motion.h2>
        </Interests>
        <Work to="/work" click={click}>
        <motion.h2
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          >
            Work
          </motion.h2>
        </Work>
        <BottomBar>
          <About to="/about" click={click}>
          <motion.h2
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          >
              About
            </motion.h2>
          </About>
          <Skills to="/skills" click={click}>
          <motion.h2
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          >
              Skills
            </motion.h2>
          </Skills>
        </BottomBar>
      </Container>
      {click ? <Intro click={click}/> : null}
    </MainContainer>
    // <h1>Hiii</h1>
  )
}
