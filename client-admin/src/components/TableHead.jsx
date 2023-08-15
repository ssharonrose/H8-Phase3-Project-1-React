const TableHead = ({ title }) => {
    return (
        <th scope="col" className="w-32 p-4" v-for="titleCol in title">{title}</th>
    )
}

export default TableHead