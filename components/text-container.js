export default function TextContainer({ children} ) {
    return (
        <div class="ex-basic-2">
            <div class="container">
                <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="text-container">
                        { children }
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}