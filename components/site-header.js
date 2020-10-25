export default function SiteHeader({ heading} ) {
    return (
        <header id="header" class="ex-header">
            <div class="container">
                <div class="row">
                <div class="col-lg-12">
                    <h1>{ heading }</h1>
                </div>
                </div>
            </div>
        </header>
    )
}