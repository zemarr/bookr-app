import React, { Fragment } from 'react';
import feat from './home.module.css';
import { Heading } from './Conferencerooms';

const Features = () => {
    return (
        <Fragment>
            <div style={{ margin: '0 100px' }}>
                <Heading name='Features' />
                <div className={feat.featurescontainer}>
                    <Feature name='Equipped for productivity'
                        description='Whiteboards, mobile chargers, WiFi, HDTVs and more. Each space includes everything you need to do your best work.'
                    />
                    <Feature name='Hands-on help'
                        description='Your dedicated account manager and support are ready to assist you with any issues on request. Our customer care team is available 24/7.' />
                    <Feature name='Distraction-free space'
                        description='Bookr gives you and your team a private space to focus and innovate , without the distractions of shared coworking spaces and overcrowded offices' />
                    <Feature name='Flexible-floor plans'
                        description='Change up the space to suit any meeting, presentation or workspace needs. Meeting room support team will take care of setting things up' />
                </div>
            </div>
        </Fragment>
    )
}

const Feature = (props) => {
    return (
        <Fragment>
            <div style={{ width: '350px' }}>
                <Doodle />
                <Details
                    name={props.name}
                    description={props.description}
                />
            </div>
        </Fragment>
    )
}

const Doodle = () => {
    return (
        <Fragment>
            <div className={feat.doodleimg}></div>
        </Fragment>
    )
}

const Details = (props) => {
    return (
        <Fragment>
            <div className={feat.info}>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
            </div>
        </Fragment>
    )
}

export default Features;