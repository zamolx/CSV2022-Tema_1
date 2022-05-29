import NewMap from "../helpers/new_map";
import Style from "../helpers/style";
import StyleCell from "../helpers/style_cell";


const QuestionAnswers = ({ colors }) => {
    const transform = new NewMap(colors)
    const newMap = new Map(transform.newMap)
    return (<>
        <div className="content-container">
            {Array.from(newMap.entries()).map((e, index) => (
                <div key={`answer-${index}`} style={(new Style(e)).style}></div>
            ))}
        </div>
        <ul className="print-answers">
            {Array.from(newMap.entries()).map((e, index) => (
                <div className="box" key={`answer-cell-${index}`}><div className="content-container" style={(new StyleCell(e)).styleCell}></div><div style={{ marginTop: '1em' }}>{e[0]}</div></div>
            ))}
        </ul>
    </>)
};
export default QuestionAnswers;