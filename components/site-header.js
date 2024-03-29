export default function SiteHeader({ heading }) {
  return (
    <>
      <div className="bg"></div>
      <header id="header" className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>{heading}</h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
