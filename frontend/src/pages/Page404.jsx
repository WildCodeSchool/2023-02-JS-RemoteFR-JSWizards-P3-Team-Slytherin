import Navbar from "../components/Navbar";

function Page404() {
  return (
    <div>
      <Navbar />
      <div className="bg-[black] flex items-center relative">
        <img
          src="/assets/background/bg_404.png"
          className=" object-scale-down block"
          alt="page 404"
        />
        <h2
          style={{ fontSize: "1.8rem" }}
          className="text-secondary absolute top-0 left-1/2 transform -translate-x-1/2 mt-10"
        >
          DÉSOLÉ !
        </h2>
        <h3
          style={{ fontSize: "1.2rem", whiteSpace: "nowrap" }}
          className="text-secondary absolute top-0 left-1/2 transform -translate-x-1/2 mt-20"
        >
          LA PAGE QUE VOUS RECHERCHEZ N’EXISTE PAS.
        </h3>
      </div>
    </div>
  );
}

export default Page404;
