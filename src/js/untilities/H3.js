import React from 'react';

const GlabsParagraph = props => (
    <h3 className={props.className} dangerouslySetInnerHTML={ { __html: props.Copy} }></h3> 
);

export default GlabsParagraph;