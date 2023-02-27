export default function Breadcrumbs({ siteName} ) {
    return (
        <div className="ex-basic-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumbs">
                        <a href="https://www.sce.de/precelerator/">Home</a><i className="fa fa-angle-double-right"></i><span>{siteName}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
