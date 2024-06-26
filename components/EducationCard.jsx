import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const EducationCard = ({ education }) => {
	return (
		<Fade left duration={2000} >
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="text-center mb-3">
						<img
							src={education.logo}
							style={{
								objectFit: "cover",
								width: "8rem",
								height: "8rem",
								borderRadius: "50%",
							}}
							className="shadow"
							alt={education.schoolName}
							/>
							</div>
							<div className="text-center">
							<h5 className="mb-2">
								{education.schoolName}
							</h5>
								<h6>{education.subHeader}</h6>
							<Badge color="info" className="mr-1">
								{education.duration}
							</Badge>
							{ education.grade && (
								<Badge color="primary" className="mr-1">
									{education.grade}
								</Badge>
							)}
							<p className="mb-2">{education.desc}</p>
							<ul>
								{education.descBullets
									? education.descBullets.map((desc) => {
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

export default EducationCard;
