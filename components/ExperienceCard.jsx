import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const ExperienceCard = ({ data }) => {
	return (
		<Fade left duration={2000} >
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="text-center mb-3">
						<img
							src={data.logo}
							style={{
								objectFit: "cover",
								width: "8rem",
								height: "8rem",
								borderRadius: "50%",
							}}
							className="shadow"
							alt={data.companylogo}
							/>
							</div>
							<div className="text-center">
							<h5 className="mb-2">
								{data.company}
							</h5>
								<h6>{data.role}</h6>
							<Badge color="info" className="mr-1">
								{data.date}
							</Badge>
							
							<p className="mb-2">{data.desc}</p>
							<ul>
								{data.descBullets
									? data.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
						</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default ExperienceCard;
