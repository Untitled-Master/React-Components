import './index.css'

function Card() {
    return (
        <div className="card">
            <div className="img-container">
                <img src="https://i.pinimg.com/1200x/46/eb/d9/46ebd97f6d550a2e7b7aacbbdf844871.jpg" alt="pfp" />
            </div>
            <div className="content">
                <h2>Card Example</h2>
                <p>This is a test</p>
            </div>
        </div>
    );
}

export default Card;