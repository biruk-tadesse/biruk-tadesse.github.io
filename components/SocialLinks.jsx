import React from "react";

import { Button } from "reactstrap";

import { socialLinks } from "../portfolio";

const SocialLinks = () => {
	return (
		<div className="btn-wrapper text-lg">
			{socialLinks.url && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="white"
					rel="noopener"
					aria-label="URL"
					href={socialLinks.url}
					target="_blank"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-link" />
					</span>
				</Button>
			)}
			{socialLinks.linkedin && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="twitter"
					rel="noopener"
					aria-label="Linkedin"
					href={socialLinks.linkedin}
					target="_blank"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-linkedin" />
					</span>
				</Button>
			)}
			{socialLinks.github && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="github"
					href={socialLinks.github}
					rel="noopener"
					aria-label="Github"
					target="_blank"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-github" />
					</span>
				</Button>
			)}
			{socialLinks.instagram && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="instagram"
					href={socialLinks.instagram}
					target="_blank"
					rel="noopener"
					aria-label="Instagram"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-instagram" />
					</span>
				</Button>
			)}
			{socialLinks.facebook && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="facebook"
					href={socialLinks.facebook}
					target="_blank"
					rel="noopener"
					aria-label="Facebook"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-facebook-square" />
					</span>
				</Button>
			)}	
			{socialLinks.twitter && (
				<Button
					className="btn-icon-only rounded-circle"
					color="twitter"
					href={socialLinks.twitter}
					target="_blank"
					rel="noopener"
					aria-label="Twitter"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-twitter" />
					</span>
				</Button>
			)}
			{socialLinks.credly && (
				<Button
					className="btn-icon-only rounded-circle"
					style={{ backgroundColor: 'darkgreen', color: 'white', fontFamily: 'cursive' }}
					href={socialLinks.credly}
					target="_blank"
					rel="noopener"
					aria-label="Credly"
				>
					<span className="btn-inner--icon">
					<strong style={{ color: 'white' }}>C</strong>
					</span>
				</Button>
			)}			{socialLinks.geeksforgeeks && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="success"
					rel="noopener"
					aria-label="GFG"
					href={socialLinks.geeksforgeeks}
					target="_blank"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-code" />
					</span>
				</Button>
			)}
			{socialLinks.leetcode && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="#FF5733"
					rel="noopener"
					aria-label="Leetcode"
					href={socialLinks.leetcode}
					target="_blank"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-code" />
					</span>
				</Button>
			)}
		</div>
	);
};

export default SocialLinks;
