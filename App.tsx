import React from 'react';
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
    		<h2>Eggcelent Facts</h2>
			<p>Some eggs are laid by female animals of many different species, including birds, reptiles, amphibians, mammals, and fish, and have been eaten by humans for thousands of years.[1] </p>
    		<p>Bird and reptile eggs consist of a protective eggshell, albumen (egg white), and vitellus (egg yolk), contained within various thin membranes. The most commonly consumed eggs are chicken eggs. Other poultry eggs including those of duck and quail also are eaten. Fish eggs are called roe and caviar.</p>
    	</SplitCol>
    	<SplitCol>
    		<h2>Eggciting Fact</h2>
    		<p>Egg yolks and whole eggs store significant amounts of protein and choline,[2][3] and are widely used in cookery. Due to their protein content, the United States Department of Agriculture formerly categorized eggs as Meats within the Food Guide Pyramid (now MyPlate).[2] Despite the nutritional value of eggs, there are some potential health issues arising from cholesterol content, salmonella contamination, and allergy to egg proteins.</p>
    	</SplitCol>
    </SplitColWrap>
    <Footer></Footer>
   </Body>
  );
}
