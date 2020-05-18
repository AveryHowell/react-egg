import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import egg from './img/Egg.png';
import hero from './img/hero.jpg';
import './src/fonts.css';

	
 const Body = styled.section`
  
`;
	
 const NavWrapper = styled.section`
  padding: 1em;
  background: papayawhip;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  width: 100%;
`;

const Logo = styled.button`
  background-image: url(${egg}); 
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  content: '';
  padding: 50px;
  margin: 0em 2em;
`;

const Nav = styled.div`
	display: flex;
	flex-direction: row;
	flex-basis: 60%;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
`;

const Link = styled.button`
	color: #cc916b;
	cursor: pointer;
	flex-basis: 25%;
	text-align: center;
	font-size: 18px;
	text-transform: uppercase;
	text-decoration: none;

	&:hover {
		color: rebeccapurple;
	}
`;

const Hero = styled.section`
	width: 100vw;
	height: 100vh;
	background-image: url(${hero}); 
`;

const SplitColWrap = styled.section`
	display: flex;
	flex-direction: row;
`;

const SplitCol = styled.div`
	align-items: center;
	flex-basis: 50%;
	justify-content: flex-start;
	display: flex;
	flex-direction: column;
	padding: 3em;
	font-family: 'Montserrat', sans-serif;
	background-color: #cc916b;

	& h2 {
		color: #ffefd6;
	}

	& p {
		max-width: 400px;
		color: #ffefd6;
	}
`;

const Footer = styled.section`
	padding: 5rem;
	background-color: #d2bdad;
`;


export default function Homepage() {
  return (
    <Body>
    <NavWrapper>
      <Logo as="a" href="/" />
      <Nav>
  		<Link as="a" href="/">About</Link>
  		<Link as="a" href="/">Products</Link>
  		<Link as="a" href="/">Team</Link>
  		<Link as="a" href="/">Contact</Link>
      </Nav>
    </NavWrapper>
    <Hero></Hero>
    <SplitColWrap>
    	<SplitCol>
    		<h2>Lorem Ipsum</h2>
    		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    	</SplitCol>
    	<SplitCol>
    		<h2>Lorem Ipsum</h2>
    		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    	</SplitCol>
    </SplitColWrap>
    <Footer></Footer>
   </Body>
  );
}
