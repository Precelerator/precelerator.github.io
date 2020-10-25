export default function Breadcrumbs({ siteName} ) {
    return (
        <div class="ex-basic-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumbs">
                        <a href="/">Home</a><i class="fa fa-angle-double-right"></i><span>{siteName}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}