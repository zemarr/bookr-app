import React, { Fragment } from 'react';
import ftr from './home.module.css';
import Button from '../buttons/Buttons';



const Footer = () => {
    return (
        <Fragment>
            <div style={{ height: '150px', margin: '3rem 0 0' }}>
                <div className={ftr.navigationcontainer}>
                    <Leftfooter
                        leftfooterclass='leftfooter'
                        logoname='Bookr'
                    />
                    <Rightfooter
                        rightfooterclass='rightfooter'
                    />
                </div>
            </div>
        </Fragment>
    )
}

const Leftfooter = (props) => {
    return (
        <Fragment>
            <div className={ftr[props.leftfooterclass]}>
                <FooterLogo
                    logoname={props.logoname}
                    logoclass='footerlogo'
                />
            </div>
        </Fragment>
    )
}

const FooterLogo = (props) => {
    return (
        <Fragment>
            <div className={ftr[props.logoclass]}>
                <h5>{props.logoname}</h5>
                <p>&copy; copyright BookR, 2019</p>
            </div>
            <Navs />
            <Social />
        </Fragment>
    )
}

const Navs = () => {
    return (
        <Fragment>
            <section>
                <ul>
                    <li>
                        <a href='/#'>About Us</a>
                    </li>
                    <li>
                        <a href='/#'>Contact</a>
                    </li>
                    <li>
                        <a href='/#'>Terms & Conditions</a>
                    </li>
                </ul>
            </section>
        </Fragment>
    )
}

const Social = () => {
    return (
        <Fragment>
            <section>
                <ul>
                    <li>
                        <a href="/#" target="_blank"><i class="fa fa-facebook-f"></i> &nbsp; &nbsp; &nbsp; Facebook</a>
                    </li>
                    <li>
                        <a href="/#" target="_blank"><i class="fa fa-twitter"></i> &nbsp; &nbsp; Twitter</a>
                    </li>
                    <li>
                        <a href="/#" target="_blank"><i class="fa fa-instagram"></i> &nbsp; &nbsp; Instagram</a>
                    </li>
                </ul>
            </section>
        </Fragment>
    )
}

const Rightfooter = (props) => {
    return (
        <Fragment>
            <div className={ftr[props.rightfooterclass]}>
                <Subscribe />
                <Contact />
            </div>
        </Fragment>
    )
}


// FUNCTIONAL SUBSCRIBE COMPONENT
// const Subscribe = () => {
//     return (
//         <Fragment>
//             <input type='form'></input>
//         </Fragment>
//     )
// }

class Subscribe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    render() {
        return (
            <div>
                <form className={ftr.contactform} id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">

                    <div className={ftr.formgroup}>
                        <label htmlFor="exampleInputEmail1">Subscribe to our newsletter</label>
                        <input type="email" className={ftr.formcontrol} aria-describedby="emailHelp" placeholder="Email Address" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>

                    <Button
                        type="submit"
                        className="subscribe"
                        name="OK" />
                </form>
            </div>
        );
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    handleSubmit(event) {
    }
}

const Contact = () => {
    return (
        <Fragment>
            <div className={ftr.contact}>
                <p>497 Evergreen Rd. Roseville, CA 95673<br />+44 345 678 903<br />conferenceroom@mail.com</p>
            </div>

        </Fragment>
    )
}


export default Footer;