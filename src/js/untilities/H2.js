import React from 'react';

const GlabsParagraph = props => (
    <h2 className={props.className} dangerouslySetInnerHTML={ { __html: props.Copy} }></h2> 
);

export default GlabsParagraph;