import "./footer.scss";

export default function Footer(){
    return(
        <div className="footer">
            <p>{new Date().getFullYear()} | Developed and designed by Jafarli</p>
        </div>
    );
}