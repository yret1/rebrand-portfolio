import CSS from "../assets/CSS.svg"
import FIGMA from "../assets/FIGMA.svg"
import HTML from "../assets/HTML.svg"
import JS from "../assets/JS.svg"
import REACT from "../assets/REACT.svg"
import PSHOP from "../assets/PSHOP.svg"
import "../components/Slider.css"

function Slider () {




    const sliderItems = [
        CSS,
        HTML,
        JS,
        REACT,
        FIGMA,
        PSHOP
    ]


    return (
        <section className="slider">

            <div className="slider__track">
            {sliderItems.map((item) => {
                return (
                    <div key={item} className="slider__box">
                        <img className="slider__item" src={item} alt="Slider Item" />
                    </div>
                )
            })}
            </div>
        </section>
    )

}

export default Slider