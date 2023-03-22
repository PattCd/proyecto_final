const ItemListContainer = (props) => {
    const divStyle = {
        width: '80%',
        margin: '10% 30%'
       }

    return  (
        <>
           <div style={divStyle}>
               <h1>{props.greeting}</h1>
           </div>
            
        </>
    )
}

export default ItemListContainer