export default function ListEntry({ strongText, regularText} ) {
    return (
        <li className="media">
            <i className="fas fa-check"></i>
            <div className="media-body">
            <strong className="blue">{strongText} </strong>
            {regularText}
            </div>
        </li>
    )
}