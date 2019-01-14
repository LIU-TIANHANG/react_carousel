import React ,{Component} from "react";
import { render } from "react-dom";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class App extends Component{
    render() {
        return(
            <div>
                <Carousel />
            </div>
        )
    }
}

render(<App />, document.getElementById("root"));
