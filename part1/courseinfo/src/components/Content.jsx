import Part from './Part'
const Content = ({content}) =>{
    return(
        <>
            {content.map(note =>
                <Part key={note.id} part={note} />
            )}
        </>
    )
}

export default Content