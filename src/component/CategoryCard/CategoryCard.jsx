export default function CategoryCard({imgSrc, title, subtitle}){
    return(
        <div className="flex bg-box flex-row-reverse flex-1 p-3 rounded-lg">
            <div className="flex-1 justify-items-center">
                <img src={imgSrc} className="img-box" alt="image" /></div>
            <div className="flex-1 text-center justify-items-center pt-5">
                <strong>{title}</strong> <br />
                <small>{subtitle}</small>
            </div>

        </div>
    );
}