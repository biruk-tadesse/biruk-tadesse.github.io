import React from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Col,
} from "reactstrap";

import { Fade } from "react-reveal";

const ExperienceCard = ({ data }) => {
	return (
		<Col lg="6">
			<Fade left duration={2000}>
				<Card
					style={{ flex: 1 }}
					className="card-lift--hover shadow mt-4"
				><CardBody>
					<div className="text-center mb-3">
						<img
							src={data.companylogo}
							style={{
								objectFit: "cover",
								width: "8rem",
								height: "8rem",
								borderRadius: "50%",
							}}
							className="shadow mb-3"
							alt={data.companylogo}
						/>
						</div>
						<div>
						<CardTitle tag="h4" className="mb-2">
							{data.company}
						</CardTitle>
						<CardSubtitle tag="h5" className="mb-2">
							{data.role}
						</CardSubtitle>
						<CardSubtitle>{data.date}</CardSubtitle>
						<CardText
							tag="div"
							className="mb-2"
						>
							<p className="mb-2">{data.desc}</p>
							<ul>
								{data.descBullets
									? data.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
						</CardText>
						</div>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default ExperienceCard;
