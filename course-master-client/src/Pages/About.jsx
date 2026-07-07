import React from 'react';
import { FiInfo as InfoIcon } from 'react-icons/fi';
import PageHeader from '../components/PageHeader';

const About = () => {
    return (
        <div>
            <PageHeader
                title="About us"
                description="Learn more about our mission, values, and the team behind Course Master."
                badgeTitle="Who we are"
                badgeDescription="A learning platform built for curious minds and lifelong growth."
                icon={InfoIcon}
            />
            <div className="px-6 py-12 lg:px-10">
                <p className="text-lg text-slate-600">We’re About Page here</p>
            </div>
        </div>
    );
};

export default About;