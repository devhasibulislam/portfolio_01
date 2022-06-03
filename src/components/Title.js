import React from 'react';
import { Helmet } from 'react-helmet-async';

const Title = ({ title }) => {
    return (
        <div>
            <Helmet>
                <title>Hasibul Islam | {title}</title>
            </Helmet>
        </div>
    );
};

export default Title;