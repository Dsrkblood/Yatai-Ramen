export default function Footer({children}){

    const currentYear = new Date().getFullYear()

    return(
        <footer>
            <p>{children} &copy; {currentYear}</p>
        </footer>
    )
}