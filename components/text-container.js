export default function TextContainer({ children} ) {
    return (
        <div className="ex-basic-2">
            <div className="container">
                <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="text-container">
                        { children }
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}