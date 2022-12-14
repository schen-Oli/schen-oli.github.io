import './Home.css';
import Resume from './resume.pdf';

const Home = () => {
    let openResume = () => {
        window.open(Resume, '_blank');
    }

    return (
        <div className="home">
            <div className="profile">
                <div className="intro">
                    <h1>Hello, I'm <span className='mint-green'>Oli</span>.</h1>
                    <h1>I'm a software engineer.</h1><br></br>
                    <h3 className="sub-intro">I love to cooperate with other talented people and work on projects that can change the world. </h3>
                    <button className="resume" onClick={ openResume }>Resume</button>
                </div>

                <div className="avatar"></div>
            </div>
        </div>
    );
}

export default Home; 