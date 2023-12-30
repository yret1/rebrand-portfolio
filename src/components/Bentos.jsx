import LinkedLogo from "../assets/Linked.svg"
import GithubLogo from "../assets/Github.svg"
import "./Bentos.css"
function Bentos() {

    const LINKED_IN = "https://www.linkedin.com/in/simon-gustavsson-94b50090/"
    const GITHUB = "https://github.com/yret1"

    let array = [LinkedLogo, GithubLogo]
    
    return (
        <section className="Bentos">
            {array.map(item => {
                return (
                    <div key={item} className="Bento" id={item}  >
                        {item === LinkedLogo ? (
                            <>
                                <a href={LINKED_IN}><button>Go There!</button></a>
                                <h1 className="title">Linked in</h1>
                                <p className="desc"><span>Want to get in touch?</span> <br />
                                Contact me over on LinkedIn!</p>
                            </>
                        ) : (
                            <>
                            <a href={GITHUB}><button>Go There!</button></a>
                            <h1 className="title">Github</h1>
                            <p className="desc"><span>Want to see my code?</span> <br />
                            Check out some projects here!</p>
                            </>
                        )}
                        <img className="Logo" src={item} alt="Bento Item" />
                    </div>
                )
            })}
        </section>
    )
}

export default Bentos