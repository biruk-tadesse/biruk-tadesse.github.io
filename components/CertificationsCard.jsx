import React from "react";
import { Card, CardBody, Badge, Button } from "reactstrap";

import { Fade } from "react-reveal";

const CertificationsCard = ({ certification }) => {
  return (
    <Fade left duration={2000}>
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-info">{certification.certificationName}</h5>
              <Badge color="info" className="mr-1">
                {certification.issueDate}
              </Badge>
              <Button
                color="primary"
                href={certification.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default CertificationsCard;
