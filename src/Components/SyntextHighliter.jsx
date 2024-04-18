import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SyntextHighliter = ({ language, children }) => {
  return (
    <SyntaxHighlighter language={language} style={materialDark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default SyntextHighliter;
