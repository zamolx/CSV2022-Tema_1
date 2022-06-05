import { useState } from "react";
import { Matrix } from "../helpers/matrix";

const Notes = ({ socket, notes }) => {
    const [clickNote, setClickNote] = useState(false);
    const [note, setNote] = useState('');
    const [position, setPosition] = useState({});

    const sendClickNote = (e) => {
        if (e.type === 'click' && e.target.textContent.length === 0) {
            let pos = {}
            let row = e.target.getAttribute('row');
            let column = e.target.getAttribute('column')
            pos.row = row;
            pos.column = column;
            setPosition(pos)
            setClickNote(true);
        }
    };

    const sendNote = () => {
        if (note.length === 0) return;
        let noteFinal = {};
        noteFinal.note = note;
        noteFinal.pos = position
        socket.emit('send note', noteFinal);
        setNote('');
        setPosition({});
        setClickNote(false);
    };

    const items = new Matrix().matrix();
    const uls = [];
    for (let row = 0; row < notes.length; row++) {
        for (let column = 0; column < notes[row].length; column++) {
            let note = notes[row][column]
            let index = `${row}-${column}`
            if (!(note[0] !== null && note[1] != null)) {
                items[row][column] = (<a href={`#id${row}${column}`} key={`a-${index}`}>
                    <li id={`id${row}${column}`} style={{
                        cursor: 'pointer',
                        background: '#ffc',
                    }} row={`${row}`} column={`${column}`} key={`li-${index}`} onClick={sendClickNote}>
                        <p key={`content-${index}`}>{note[0]}</p>
                    </li></a>)
            } else {
                items[row][column] = (<li style={{ background: note[1] }} key={`li-${index}`}>
                    <p key={`content-${index}`}>{note[0]}</p>
                </li>)
            }
        }
    }

    for (let i = 0; i < notes.length; i++) {
        uls.push(<ul key={`ul-${i}`}>{items[i]}</ul>)
    }

    return (
        <>
            <div id="form-center">
                <textarea onChange={(e) => setNote(e.target.value)}
                    name="note" id="note" rows="5" cols="33"
                    placeholder="Feedback..." value={note}>
                </textarea>
                {/* {clickNote ? <button className="styled" onClick={sendNote}>Submit</button> : null} */}
                <button className="styled" onClick={sendNote} disabled={!clickNote}>Submit</button>

            </div>
            <div>
                {uls}
            </div>
        </>
    )
};

export default Notes;
