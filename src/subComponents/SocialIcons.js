import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, Instagram, LinkedIn, Twitter, YouTube } from '../components/AllSvgs'
import { darkTheme } from '../components/Themes';

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2 rem;

  z-index: 3;
  
  &>*:not(:last-child){
    margin: 0.5rem 0;
  }
`;
const Line = styled.span`
  width: 2px;
  height: 8rem;
 /* color: black; */
  background-color: ${props => props.color==='dark' ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <NavLink style={{ color: 'inherit' }} to={{pathname:"https://github.com/ashna-asrani27"}} target="_blank"  >
          <Github width={30} height={30} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
        </NavLink>
      </div>
      <div>
        <NavLink to={{pathname:"https://www.instagram.com/ashna_asrani/?hl=en"}} style={{ color: 'inherit' }} target="_blank">
          <Instagram width={30} height={30} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
        </NavLink>
      </div>
      <div>
        <NavLink to={{pathname:"https://www.facebook.com/ashna.asrani/"}} style={{ color: 'inherit' }} target="_blank">
          <Facebook width={30} height={30} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
        </NavLink>
      </div>
      <div>
        <NavLink to={{pathname:"https://www.linkedin.com/in/ashna-asrani-16ab9a212/"}} style={{ color: 'inherit' }} target="_blank">
          <LinkedIn width={30} height={30} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
        </NavLink>
      </div>
      <Line color={props.theme} />
    </Icons>
  )
}

export default SocialIcons