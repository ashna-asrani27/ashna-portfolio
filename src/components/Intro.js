import React from 'react'
import styled from 'styled-components'
import ProfilePicture from '../assets/Images/ProfilePicture.jpeg'
import {motion} from 'framer-motion'

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
    width: 65vw;
    height: 55vh;
    display: flex;


    /* A gradient going from the bottom right to the top left corner,
   starting blue and finishing red 
linear-gradient(to left top, blue, red);
*/
    background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(
            to right,
            ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;
        background-repeat: no-repeat;
         background-size: 100% 2px;
        border-left: 2px solid ${props => props.theme.body};
        border-right: 2px solid ${props => props.theme.text};

        z-index:1;
    ;
`;
const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;


    .pic{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%,-5%);
        height: auto;
        width: 100%;

    }
`;

const Text = styled.div`
    font-size:calc(1em + 1.5vw);
    color: ${props => props.theme.body};
    padding: 0.7rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &>*:last-child{
        color:${props => `rgba(${props.theme.bodyRgba},0.6)`};
        font-size: calc(0.5rem + 1.5vw);
        font-weight:300;
    color: ${props => props.theme.body};

    
    }
`

const Intro = (props) => {
    return (
        <Box
        initial={{height:0}}
        animate={{height:'55vh'}}
        transition={{type:'spring', duration:2, delay:1}}
        >
            {/* <SubBox>
                <div>
                    <img className='pic' src={ProfilePicture}  alt="Profile Pic" />
                </div>
            </SubBox> */}
            <SubBox>
                <Text>
                    <h1>Helloo,</h1>
                    <h3>I'm Ashna Asrani aka Skyy!</h3>
                    <h6>I'm a full stack developer and a problem-solver. </h6>
                    {/* <inputt type="button" className='btn btn-outline-dark'>Download Resume</inputt> */}
                    {/* <h6>My core values include never giving up and giving my 100% in every situation!</h6> */}
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1, delay:2}}
                >
                    <img className='pic' src={ProfilePicture} height={400} width={400} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro