import './Navbar.css'

export default function Navbar 
({
    // variables if there are any
})
    
{
    return (
        <nav class="navbar">
            <div class="navbar-left">
                <img src="assets/Icons/favicon.svg" alt="Morfale Logo" class="logo"></img>
            </div>
            <div class="navbar-right">
                <a href="#" class="nav-item">
                    <span class="nav-text">Favorite recipes</span>
                    <img src="assets/Icons/heart.svg" alt="Heart Icon"></img>
                </a>
                <a href="#" class="nav-item">
                    <span class="nav-text">Random meals</span>
                    <img src="assets/Icons/repeat.svg" alt="Shuffle Icon"></img>
                </a>
                {/* <a href="#" class="nav-item">
                    <span class="nav-text">Around the world</span>
                    <img src="assets/Icons/map.svg" alt="Map Icon"></img>
                </a> */}
            </div>
</nav>
    );
};