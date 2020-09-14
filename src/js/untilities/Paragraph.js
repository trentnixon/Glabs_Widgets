import React from 'react';

const GlabsParagraph = props => (
    <p className={props.className} dangerouslySetInnerHTML={ { __html: props.Copy} }></p> 
);

export default GlabsParagraph;