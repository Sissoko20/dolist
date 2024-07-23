import React, { useState } from "react";
import './TodoForm.css'

function TodoForms({addTodo}){

    const [value, setvalue] = useState('');




    const handleSubmit = e =>{
        e.preventDefault();
        if(!value)return;
        console.log("tache ajoutée" +value);
        addTodo({
            text:value,
            isCompleted:false
        });
        setvalue('');
       
    };
        
   


    
    return(
        <div className="TodoForm"> 
            <form onSubmit={handleSubmit}> 
              
                <input type="text" style={{
                   
                    backgroundColor:"black",
                    color:"GrayText",
                    fontSize:20,
                    border:"none"
                }}
                value={value}
                placeholder="Entrez une tache"
                onChange={e=>setvalue(e.target.value)}
                />
               
                
                <button type="submit" style={{
                    borderRadius:10,
                    backgroundColor:"ButtonFace",
                    fontSize:15, 
                    marginLeft:20
                }}>Add</button>  
                
            </form>
        </div>
    )
}
export default TodoForms;