import "./header.css";
import { ReactComponent as TwitterIcon } from './icons8-twitter.svg';
import { ReactComponent as TwitterCircle} from './icons8-twitter-circle.svg';

const Header = () => {
    return (
        <header>            
            <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                <div style={{display: "flex"}}>
                    <TwitterCircle />
                    <div className="twitterFont">
                        <b>Twitter</b>
                        <p>@Twitter</p>
                    </div>
                </div>
                <div className="twitterIcon">
                    <TwitterIcon />
                </div>
            </div>
            <p>
                Happy 3rd anniversary <a href="#TBT">#TBT</a>! See how "Throwback Thursday" 
                cemented its status as a weekly Twitter tradition:<br></br> 
                <a href="blog.twitter.com">blog.twitter.com</a>
            </p>
        </header>
    );
}
    
export default Header;