import './FilterHome.css';
function FiltersHome() {
    return (
      <div className="row my-3 gx-4">
        <div className="col-lg-5 col-md-3 col-sm-12 col-12 mb-lg-0">
          <div className="px-2 py-1">
            <h6 className="mb-0 pt-1 fc-primary-important fw-bold fs-md-4 fs-sm-5 fs-6">Últimos Registros de empleados</h6>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-7 col-7 mb-lg-0 px-0 search-filter">
          <div className="px-sm-3 py-2 px-1">
            <div className="input-group input-group-md custom-search border rounded bg-body-tertiary">
              <input
                type="text"
                className="form-control custom-search order-lg-1 order-2 border border-0 bg-transparent"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-md"
                placeholder="Buscar Empleado"
                style={{ fontSize: "0.7rem" }}
              />
              <button className="btn btn-outline-secondary custom-search btn-md order-lg-2 order-1 rounded rounded-sm-2 border border-0" type="button">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-1 col-md-2 col-sm-2 col-2 m-left-4  d-flex align-items-center filter-icons">
          <div className="p-0">
            <div className="btn-group">
              <button
                className="btn btn-md btn-fill-primary btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa-solid fa-filter mx-md-1 mx-sm-2 mx-0"></i>
                <span className="d-none d-md-inline-block fs-6">Filtrar por</span>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="#">
                  Código
                </a>
                <a className="dropdown-item" href="#">
                  Empleado
                </a>
                <a className="dropdown-item" href="#">
                  Documento
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-1 col-md-2 col-sm-2 col-2 m-left-4 d-flex mx-auto filter-icons">
          <div className="py-2">
            <div className="btn-group">
              <button className="btn btn-md btn-fill-primary btn-primary d-flex align-items-center" type="button">
                <i className="fa-solid fa-file-export mx-md-1 mx-sm-2 fs-6 py-1"></i><span className="d-none d-md-block fs-6">Exportar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default FiltersHome;