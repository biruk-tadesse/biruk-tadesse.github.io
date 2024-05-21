import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { Fade } from "react-reveal";

const FeedbackCard = ({ data }) => {
  return (
    <Fade bottom duration={2000}>
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
              alt={data.certificationName}
            />
          </div>
          <div className="text-center">
            <h5 className="mb-2">{data.certificationName}</h5>
            <h6>{data.subHeader}</h6>
            <Badge color="info" className="mr-1">
								{data.issueDate}
							</Badge>
            <p className="mb-2">{data.link}</p>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default FeedbackCard;
