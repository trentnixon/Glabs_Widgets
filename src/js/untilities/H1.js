import React from 'react';

const GlabsParagraph = props => (
    <h1 className={props.className} dangerouslySetInnerHTML={ { __html: props.Copy} }></h1> 
);

export default GlabsParagraph;