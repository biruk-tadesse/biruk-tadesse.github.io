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
							<h5 className="mb-2">{data.certificationName}</h5>
							<p className="mb-2">{data.issueDate}</p>
              <p className="mb-2">{data.clickHere}</p>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default FeedbackCard;
