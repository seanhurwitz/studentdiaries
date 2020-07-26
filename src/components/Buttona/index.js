import React from 'react';
import styled from 'styled-components';

const Buttona = ({ href, children, className }) => {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

export default styled(Buttona)`
  text-decoration: none;
  padding: 30px;
  border: 1px solid #fff;
  width: 100px;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  background: #333;
`;
