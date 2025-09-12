import logo from "../assets/images/urban3.png";

export const DashboardPage = () => {
  return (
    <>
      <h1 className="pageTitle">Urban Food Retail</h1>
      <div
        style={{
          height: 300,
          width: 300,
          margin: "auto",
          position: "absolute",
          top: "170px",
          left: "50%",
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <footer
        style={{
          width: "calc(100% - 250px)",
          position: "absolute",
          bottom: "0",
          left: "233px",
          textAlign: "center",
          padding: "8px",
          borderTop: "1px solid #ccc",
          fontSize: "0.85rem",
        }}
      >
        © {new Date().getFullYear()} Urban Food Retail. All rights reserved.
      </footer>
    </>
  );
};
