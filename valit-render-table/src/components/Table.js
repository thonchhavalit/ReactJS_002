function TableRender({ productLink }) {
    return (
        <tbody>
            {
                productLink.map(data => (
                    <tr>
                        <th scope="row">{data.id}</th>
                        <td>{data.title}</td>
                        <td>{data.price}</td>
                        <td>{data.description}</td>
                        <td>
                            <img src={data.images} />
                        </td>
                    </tr>
                ))
            }
        </tbody>
    )
}
export default TableRender