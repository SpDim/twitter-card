import { useEffect, useState } from 'react';
import { ReactComponent as TwitterIcon } from './../../icons/icons8-twitter.svg';
import { ReactComponent as TwitterCircle} from './../../icons/icons8-twitter-circle.svg';
import { ReactComponent as TwitterBody} from './../../icons/twitterBodyIcon.svg';
import './TwitterCard.css';

//*
const  TwitterCard = (props) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const myTimer = setInterval(() => {
        console.log('increase seconds');
        setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => {
        clearInterval(myTimer);
    };
  }, []);

  return (
    <div className="twitterCardContainer">
       <div className="header">
            <div className="headerPart1">
                <TwitterCircle style={{ width: 40,height: 40 }}/>

                <div>
                    <div className="twitterWithIcon">
                        <strong>{props.name}</strong>
                        <TwitterIcon style={{ width: 20, height: 20 }}/>
                    </div>
                    <div>@Twitter {seconds}</div>
                </div>
            </div>

            <div className="headerPart2">
                <TwitterIcon style={{ width: 20, height: 20 }}/>
            </div>
       </div>

       <div className="twitterDescription">
            Happy 3rd anniversary <a href="#TBT">#TBT</a>! See how "Throwback Thursday" 
            cemented its status as a weekly Twitter tradition: &nbsp;
            <a href="blog.twitter.com">blog.twitter.com</a>
       </div>

       <div className="twitterBody">
            <TwitterBody style={{ maxWidth: '90%', alignSelf: 'center'}}/>
            <div className="bodyText">
                <b>History of #TBT on Twitter</b>
                <div>History of #TBT o Twitter</div>
                <a href="blog.twitter.com">blog.twitter.com</a>
            </div>
       </div>

       <div className="twitterFooter">
            <div className="footerRow">
                <div className="footerRowPart1">
                    <TwitterCircle style={{ width: 40,height: 40 }}/>
                    Date XXX
                </div>

                <TwitterCircle style={{ width: 40,height: 40 }}/>
            </div>

            <hr />

            <div className="footerRow">
                <div className="footerRowPart1">
                    <TwitterCircle style={{ width: 40,height: 40 }}/>
                    Date YYY
                </div>

                <TwitterCircle style={{ width: 40,height: 40 }}/>
            </div>
       </div>
    </div>
  );
}

export default TwitterCard;
// */

/*
export default class TwitterCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          seconds: 0,
        };

        this.myTimer = null;
      }

      componentDidMount() {
        this.myTimer = setInterval(()=>{
              console.log('Increase Second');
              this.setState({ seconds: this.state.seconds + 1});
          },1000)
      }

    componentWillUnmount () {
        clearInterval(this.myTimer);
    }

    render() { 
        return (
            <div className="twitterCardContainer">
                <div className="header">
                    <div className="headerPart1">
                        <TwitterCircle style={{ width: 40,height: 40 }}/>
        
                        <div>
                            <div className="twitterWithIcon">
                                <strong>{this.props.name}</strong>
                                <TwitterIcon style={{ width: 20, height: 20 }}/>
                            </div>
                            <div>@Twitter: {this.state.seconds}</div>
                        </div>
                    </div>
        
                    <div className="headerPart2">
                        <TwitterIcon style={{ width: 20, height: 20 }}/>
                    </div>
                </div>
        
                <div className="twitterDescription">
                    Happy 3rd anniversary <a href="#TBT">#TBT</a>! See how "Throwback Thursday" 
                    cemented its status as a weekly Twitter tradition: &nbsp;
                    <a href="blog.twitter.com">blog.twitter.com</a>
                </div>
        
                <div className="twitterBody">
                    <TwitterBody style={{ maxWidth: '90%', alignSelf: 'center'}}/>
                    <div className="bodyText">
                        <b>History of #TBT on Twitter</b>
                        <div>History of #TBT o Twitter</div>
                        <a href="blog.twitter.com">blog.twitter.com</a>
                    </div>
                </div>
        
                <div className="twitterFooter">
                    <div className="footerRow">
                        <div className="footerRowPart1">
                            <TwitterCircle style={{ width: 40,height: 40 }}/>
                            Date XXX
                        </div>
        
                        <TwitterCircle style={{ width: 40,height: 40 }}/>
                    </div>
        
                    <hr />
        
                    <div className="footerRow">
                        <div className="footerRowPart1">
                            <TwitterCircle style={{ width: 40,height: 40 }}/>
                            Date YYY
                        </div>
        
                        <TwitterCircle style={{ width: 40,height: 40 }}/>
                    </div>
                </div>
            </div>
        )
    };
  }
  // */