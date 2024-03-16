function Navbar(){

    return(
        <div className="header">
            <span className="event">Event</span>
            <span className="minded">Minded</span>
            <div className="navbars">
                <a href="/home">Accueil</a>
                <a href="/EventList">Evenements</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    )
}   

export default Navbar;