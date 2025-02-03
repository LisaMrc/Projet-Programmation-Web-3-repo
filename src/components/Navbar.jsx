import './Navbar.css'

export default function Navbar 
({
    // variables if there are any
})
    
{
    // Dynamic / files

    return (
        <nav class="navbar">
            <div class="navbar-left">
                <img src="assets/Logo.png" alt="Morfale Logo" class="logo"></img>
            </div>
            <div class="navbar-middle">
                <input type="text" placeholder="You're hungry ?" class="search-bar"></input>
            </div>
            <div class="navbar-right">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-shuffle"></i>
                <i class="fa-solid fa-basket-shopping"></i>
                <button class="icon">👤</button>
            </div>
        </nav>
    );
};