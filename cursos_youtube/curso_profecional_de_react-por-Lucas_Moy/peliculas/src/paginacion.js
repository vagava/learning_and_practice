export default function Paginacion(props) {
  const getPaginas = () => {
    const resultado = [];
    for (let i = 1; i <= props.total; i++) {
      resultado.push(
        <a
          onClick={() => props.onChange(i)}
          className={props.pagina === i ? "active" : ""}
        >
          {i}
        </a>
      );
    }
    return resultado;
  };

  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>
          Pagina {props.pagina} de {props.total}:
        </span>
        {getPaginas()}
      </div>
    </div>
  );
}
