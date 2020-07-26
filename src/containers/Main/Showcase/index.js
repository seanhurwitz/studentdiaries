import React from 'react';
import { StyledShowcase } from './styles';
import { ButtonLink } from '../../../components';

const Showcase = () => {
  return (
    <StyledShowcase>
      <h1>Diaries</h1>
      <h2>For the nation</h2>
      <ButtonLink href="#contact">CONTACT</ButtonLink>
    </StyledShowcase>
  );
};

export default Showcase;
