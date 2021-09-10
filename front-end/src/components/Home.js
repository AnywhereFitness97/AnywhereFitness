import React from "react";
import BeachGym from "./componentsIMGFiles/BeachGym.jpg";
import Gym from "./componentsIMGFiles/Gym.jpg";
import rules from "./componentsIMGFiles/rules.jpeg";

const Home = () => {
	return (
		<div className="home_container">
			<div className="home_banner">
				<div className="home_title_container">
					<h1 className="home_title">Welcome to Anywhere Fitness</h1>
					<a className="banner_Register_link" href="/register">
						Start Here
					</a>
				</div>
			</div>
			<div className="home_options_container">
				<div className="home_option_1">
					<img
						className="home_option_img_1"
						src={BeachGym}
						alt="yoga at the beach"
					/>
					<h4 className="home_option_title_1">Your Gym Your Location</h4>
					<p className="home_option_description_1">
						Imagine "Yoga on the Beach" or Beach Runs at day break you make your
						class, choose your class size set your price and wait for clients to
						sign up. Its that simple
					</p>
				</div>
				<div className="home_option_2">
					<img
						className="home_option_img_2"
						src={Gym}
						alt="gym with no one in it"
					/>
					<h4 className="home_option_title_2">No Gym Needed</h4>
					<p className="home_option_description_2">
						If you own a Gym, Great! If you dont own a gym Great! Anywhere
						Fitness' easy to use system allows you the instructor to create and
						hold class wherever you choose.
					</p>
				</div>
				<div className="home_option_3">
					<img
						className="home_option_img_3"
						src={rules}
						alt="poster of rules"
					/>
					<h4 className="home_option_title_3">Your Gym Your Rules</h4>
					<p className="home_option_description_3">
						Choose who comes and who cant come to class. Send private for users
						with Instructor given code to join special classes. The rulles you
						set are for your classes. Be respectful and most of all "Make Your
						Gym Legendary".
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
