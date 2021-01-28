const Filter = (props) => {
    return (
        <select className={props.className} onChange={props.setValue}>
            <option value={'nothing'}>{props.placeholder}</option>
            {props.values.map((value, index) => {
                return <option value={value} key={index} >{value}</option>
            })}
        </select>
    )
}

export default Filter;
