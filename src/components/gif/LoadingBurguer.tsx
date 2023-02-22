import loading from "../../assets/gif/loading-burguer.gif";

export const LoadingBurguer = () => {
  return (
    <img
      src={loading}
      alt="cargando..."
      style={{
        width: "200px",
        height: "200px",
        margin: "auto",
        gridColumn: "1/4",
        objectFit: "cover",
      }}
    />
  );
};
