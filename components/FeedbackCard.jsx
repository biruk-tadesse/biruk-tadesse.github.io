import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const FeedbackCard = ({ data }) => {
	return (
		<Fade bottom duration={2000} >
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 className="text-info">{data.certificationName}</h5>
							<p className="text-info">{data.issueDate}</p>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default FeedbackCard;
