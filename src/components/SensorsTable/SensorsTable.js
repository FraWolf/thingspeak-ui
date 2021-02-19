function Table(props) {
  const data = props.data;
  const object = props.object;
  const objectKeys = Object.keys(object);

  return (
    <table className="table">
      <thead className="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Valore</th>
          <th scope="col">Data</th>
        </tr>
      </thead>
      <tbody>
        {objectKeys.map((item) => {
          if (item.startsWith("field")) {
            return (
              <tr>
                <th scope="row">{item.replace("field", "")}</th>
                <td>{data[item]}</td>
                <td>{object[item]}</td>
                <td>{object.created_at}</td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}

export default Table;
