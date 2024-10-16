import './header.css';

export default function Header() {
    return (
        <header className='header-container'>
            <h1>Aulinha Top</h1>

            <nav className='itens-nav'>
                <li>Home</li>
                <li>Produtos</li>
                <li>Contato</li>
            </nav>

        </header>
    )
}