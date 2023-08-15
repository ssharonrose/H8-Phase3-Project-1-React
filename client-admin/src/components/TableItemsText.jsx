const TableItemsText = ({ text } = "&nbsp;") => {
    return (
        <td className="w-32 p-4  whitespace-normal">
            <p className="line-clamp-3">{text}</p></td>
    )
}

export default TableItemsText