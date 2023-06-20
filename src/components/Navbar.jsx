import logo from "./assets/react.svg"

export default function Navbar() {
    return (
        <header>
            <img src= {logo} className="logo"/>
            <h3 class="react-facts">ReactFacts</h3>
            <h4 class="extra-title">React Course - Project 1</h4>
        </header>
    )
}