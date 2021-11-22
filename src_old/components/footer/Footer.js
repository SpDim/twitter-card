import './footer.css';
import { ReactComponent as Heart } from './heart-3509.svg'
import { ReactComponent as Info } from './information-6266.svg';
import { ReactComponent as Speech } from './speech-bubble-875.svg';
import { ReactComponent as Arrow } from './arrow-right-3098(1).svg';



const Footer = () => {
    return (
        <footer>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <Heart />
                    <pre>695  6:26 PM - Apr 30, 2015</pre> 
                </div>
                <Info />
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <Speech />
                    <pre> 482 people are talking about this</pre>
                </div>
                <Arrow />
            </div>
        </footer>
    );
}

export default Footer;