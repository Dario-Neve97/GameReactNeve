export default function Footer() {
  return (
    <>
      <footer className="text-center" style={{backgroundColor: "#6C757D"}}>
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#3b5998"}}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#55acee"}}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#dd4b39"}}
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#ac2bac"}}
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{backgroundColor:"#0082ca"}}
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{backgroundColor:"#333333"}}
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3 volume-footer"
          style={{backgroundColor:"#6C757D"}}
        >
          <span className="me-1 text-white">© 2020 Copyright:</span>
          <a className="text-white" href="https://www.linkedin.com/in/dario-neve-webdeveloper/">
            linkedin
          </a>
        </div>
      </footer>
    </>
  );
}
