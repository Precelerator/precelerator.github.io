export default function ProjectBreadcrumbs({ projectName }) {
  return (
    <div className="ex-basic-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumbs">
              <a href="/">Home</a>
              <i className="fa fa-angle-double-right"></i>
              <a href="/projects">Projects</a>
              <i className="fa fa-angle-double-right"></i>
              <span>{projectName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
