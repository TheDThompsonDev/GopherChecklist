import './Header.scss'
import go from '../assets/go.png'

export const Header = () => {
    return (
        <header className = "page-header"> 
            <h1>Gopher Todo App</h1>
            <img src={go} alt="Go lang mascot holding a calculator and wearing a tie" />
        </header>

    )
}