import ProfilePic from "../assets/Profile.webp";
import Loading from "./Loading";
import Slider from "./Slider";
import "../components/Profile.css";
function Profile (){
    return(
        <main className="main">
            <section className="main__profile">
                <div className="profile__text">
                    <hr />
                    <h2 className="Profile__header">Welcome</h2>
                    <Loading />
                    <p className="profile__prompt">Check Back In 2024!</p>
                    <hr />
                </div>
                <div className="profile__spinner">
                <div className="profile__img"></div>
                </div>
                
            </section>
            <section className="main__slider">
                <h2>My Current Techstack</h2>
                <Slider />
            </section>
        </main>
    )
}

export default Profile