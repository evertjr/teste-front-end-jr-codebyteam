import React from 'react';

import { Container } from './styles';

interface GraphBarProps {
  value: number;
  time: number;
  description: string;
  size: number;
}

const GraphBar: React.FC<GraphBarProps> = ({
  value,
  time,
  description,
  size,
}: GraphBarProps) => {
  return (
    <Container size={size}>
      <div className="top">
        <strong>$ {value}</strong>
        <span>{time}+ hours</span>
      </div>
      <div className="bottom">
        <p>{description}</p>
      </div>
    </Container>
  );
};

export default GraphBar;
