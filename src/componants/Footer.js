import '../styles/Footer.css';

const FooterComponant = () => {
    return (


        <div className="footer">
            <div className="row">
                <div className="-footer-line"></div>
                <p className="about-website">
                    All Rights Reserved | Website by <a href="https://webdevev.herokuapp.com/" target="_blank" rel="noreferrer">WebDevEv</a> |

                    {/* updates year for me */}
                    {new Date().getFullYear()}&nbsp;

                </p>
            </div>

        </div>

    );
}

export default FooterComponant;