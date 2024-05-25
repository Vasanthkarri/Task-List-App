import React,{useState} from 'react';
import { Button, Dialog, DialogActions, DialogContent, stack, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { createSvgIcon } from '@mui/material/utils';
import './Modalpopup.css';
const Modalpopup = () => {
    const PlusIcon = createSvgIcon(
        // credit: plus icon from https://heroicons.com/
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>,
        'Plus',
      );

    const [newItem,setNewItem] = useState(" ");  
    const [open,openchange] = useState(false);

    const handleopenpopup=() =>{
      openchange(true);
    }
    const handleclosepopup=() =>{
      openchange(false);
    }
    return (
      <div className='main' >
        <div className='heading'>
      <h1>Task List</h1>
      <button onClick= {handleopenpopup} variant="contained" className='button'>
      <PlusIcon />
        Add Task</button>
        </div>
        <div className='task-dg'>
          <form>
          <Dialog open={open} onClose={handleclosepopup} fullWidth maxWidth="md">
            <DialogTitle>Add Task <IconButton onClick={handleclosepopup}><CloseIcon></CloseIcon></IconButton></DialogTitle>
            <DialogContent>
          <stack direction="column" row="2">
        <label htmlFor>Task</label> <br/>
        <input 
          placeholder="Type your task here"
          type="text"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          id="item"
        /> <br/>
        <label htmlFor>Priority</label> <br/>
        <ul>
          <li>High</li>
          <li>Medium</li>
          <li>Low</li>
        </ul>

        </stack>
        
            </DialogContent>
            <DialogActions>
              <Button className='pop-btn' variants="contained">Add</Button>
            </DialogActions>
            </Dialog> 
            </form>     
            </div>
 </div>  
  );
}

export default Modalpopup