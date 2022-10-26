import '../styles/Footer.css';

const FooterComponant = () => {
    return (


        <div className="footer">
  
            
                <p className="about-website">
                    All Rights Reserved | Website by <a href="https://webdevev.com/" target="_blank" rel="noreferrer">WebDevEv</a> |

                    {/* updates year for me */}
                    {new Date().getFullYear()}&nbsp;

                </p>
  

        </div>

    );
}

export default FooterComponant;