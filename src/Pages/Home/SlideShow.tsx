import styled from "@emotion/styled";
import gsap from "gsap";
import React, { Component } from "react";
import { Box } from "../../Components/Box";

interface State {
  route: string;
  imgLoaded: string[];
  actualImg: number;
  succseveImg: number;
}
export default class SlideShow extends Component {
  state: State = {
    route: "home",
    imgLoaded: [],
    actualImg: 0,
    succseveImg: 1,
  };

  componentDidMount(): void {
    this.setState({
      imgLoaded: [
        "https://scaling.spaggiari.eu/FIII0015/carosello/5907.png&rs=%2FtccTw2MgxYfdxRYmYOB6Dr5NBr1fpaT6WNTxe%2FsWXs2htM1BhF%2Fr5nAtRVDWvfToaaRx%2B2JxzErLvPHd3k%2BHVZCH%2FH94jO3WzJ4t9912adlubEDyeKjuNoEf0Q46R4XldLfEeqODaQbhJif24xVbw%3D%3D",
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ],
    });
    this.ChangeImg();
    this.Animation();
  }

  componentDidUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<State>,
    nextContext: any
  ): void {
    const imgContainer = document.querySelectorAll(".imgContainer");
    const { actualImg, succseveImg } = this.state;
    //do only if the imgContainer is updated

    if (imgContainer) {
      gsap.to(imgContainer[succseveImg], { x: -1000, duration: 1 });
      setTimeout(() => {
        gsap.to(imgContainer[actualImg], {
          x: 1000,
          duration: 1.8,
          opacity: 0,
        });
        gsap.to(imgContainer[succseveImg], {
          x: 0,
          duration: 1,
          opacity: 1,
        });
      }, 300);
    }
  }

  ChangeImg = () => {
    setTimeout(() => {
      if (this.state.actualImg + 1 < this.state.imgLoaded.length) {
        this.setState({
          actualImg: this.state.actualImg + 1,
          succseveImg:
            this.state.succseveImg + 1 < this.state.imgLoaded.length
              ? this.state.succseveImg + 1
              : 0,
        });
      } else {
        this.setState({ actualImg: 0, succseveImg: 1 });
      }
      this.ChangeImg();
    }, 4000);
  };

  Animation = () => {
    try {
      const AllText = document.querySelectorAll(".letter");
      const tl = gsap.timeline();

      AllText.forEach((text, index) => {
        gsap.to(text, {
          opacity: 0,
          y: 500,
        });
      });
      setTimeout(() => {
        AllText.forEach((text, index) => {
          tl.to(text, {
            duration: 0.15,
            opacity: 1,
            y: 0,
            delay: index * 0.01,
          });
        });
        tl.play();
        setTimeout(() => {
          this.Animation();
        }, 3000);
      }, 1000);
      // -----------------------------------------------
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    // console.log("dio");
    // console.log(this.state.actualImg, this.state.succseveImg);
    return (
      <Box style={{ position: "relative" }} center>
        <Box
          style={{
            position: "absolute",
            top: 200,
            overflow: "hidden",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: "10px 20px",
            zIndex: 9999999,
          }}
          row
        >
          {"ImgContainer".split("").map((letter, index) => (
            <span
              className="letter"
              style={{
                opacity: 1,
                fontSize: "68px",
                fontWeight: "bold",
                zIndex: 999999,
                color: "white",
              }}
            >
              {letter}
            </span>
          ))}
        </Box>

        <SlideShown style={{ overflow: "hidden" }}>
          {this.state.imgLoaded.map((img, index) => (
            <Box>
              <FullContainerImg className="imgContainer" src={img} />
            </Box>
          ))}
        </SlideShown>
      </Box>
      //   <></>
    );
  }
}

// const GradiantAbsoluteBox = styled(Box)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 50vh;
//   background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
//   z-index: 12;
// `;
const FullContainerImg = styled.img`
  /* make the img contain entearly the slide show  */
  width: 100%;
  height: 70vh;
  border-radius: 14px;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;
const SlideShown = styled(Box)`
  z-index: 100;
  /* box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 80vw;
  height: 50vh;
  position: relative; */
  overflow: hidden;
  overflow-x: hidden !important;
`;
