import React from 'react';

import { Container } from './styles';

interface CategoryCardProps {
  image: string;
  title: string;
  subtitle: string;
  size: 'small' | 'medium' | 'big' | 'medium-right';
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  title,
  subtitle,
  size,
}: CategoryCardProps) => {
  return (
    <Container size={size} style={{ backgroundImage: `url(${image})` }}>
      <div>
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </div>
    </Container>
  );
};

export default CategoryCard;
