export default function Footer() {
    const year = new Date().getFullYear();
    const styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    return (
        <footer className="text-center">
            <p style={styles}>&copy; {year} Hera Luxury Retails. All rights reserved.</p>
                
        </footer>
    )
}