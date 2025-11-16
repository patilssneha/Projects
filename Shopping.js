import  {useState} from "react";
function Shopping(){
    const [item,setItem]= useState("");
    const [items,setItems] = useState([]);
     
    const addItem =() =>{
        if (item.trim() === ""){
            alert("Please enter an item name!");
            return;
        }
        setItems([...items, item]);
        setItem("");
    };
    return(
        <div style={styles.container}>
            <h1> Shopping List App</h1>

            <div style={styles.inputContainer}>
                <input
                type="text"
                value={item}
                placeholder="Enter item Name"
                onChange={(e) => setItem(e. target.value)}
                style={styles.input}
                />
                <button onClick={addItem} style={styles.button}>
                    Add
                </button>
                            </div>
                <div style={styles.container}>
                    {items.length === 0 ? (
                        <p style={{ color: "Darck gray"}}> No items added</p>
                    ):(
                        <ul style={styles.list}>
                            {items.map((it, index) => (
                                <li key={index} style={styles.listItem}>
                                    {it}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

        </div>
    );

}
const styles={
    container: {
        textAlign: "center",
        marginTop: "50",
        fontFamily: "Arial",
    },
    inputContainer:{
        marginBottom: "20px",
    },
    input:{
        padding: "8px",
        width: "200px",
        marginRight: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "8px 15px",
        backgroundColor: "#0fe91dff",
        color: "Parrot Green",
        border: "Green",
        cursor: "pointer",
        borderRadius: "5px",
    },
    list: {
        listStyleType: "none",
        padding: 0,
    },
    listItem: {
        fontSize: "18px",
        padding: "8px 0",
    },
};
export default Shopping;