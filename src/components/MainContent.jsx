import logo from "./assets/react.svg"

export default function Main() {
    return (
        <main>
            <h1 class="main-title">Fun facts about React</h1>
            <ul class="fun-facts">
                <li className="list-item">Was first released in 2013</li>
                <li className="list-item">Was originally created by Jordan Walke</li>
                <li className="list-item">Has well over 100K stars on GitHub</li>
                <li className="list-item">Is maintained by Facebook</li>
                <li className="list-item">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={logo} alt="react-logo" class="main-logo"/>
        </main>
    )
}