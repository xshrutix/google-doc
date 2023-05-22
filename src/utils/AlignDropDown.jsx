// required mui components and icons
import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { MdOutlineArrowDropDown } from "react-icons/md";
import {CiTextAlignLeft , CiTextAlignCenter, CiTextAlignRight , CiTextAlignJustify} from "react-icons/ci"
import { IconButton } from "@mui/material";

//Text Aling dropdown
export default function AlignDropDown() {
  // dropdown open and close state  
  const [open, setOpen] = React.useState(false); // initially closed
  const anchorRef = React.useRef(null);
 
    //function to toggle state
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

   // closing dropdown 
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

    //return jsx
  return (
    <div>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        sx={{ minWidth: 0 , margin:0 , padding:0 }}
      >
        <span className="text-black flex">
          <IconButton sx={{ padding: 0, margin: 0 , color:'black' }}>
            <CiTextAlignLeft sx={{ padding: 0, margin: 0 }} className="text-base" />
            <MdOutlineArrowDropDown sx={{ padding: 0, margin: 0 }} className="text-base" />
          </IconButton>
        </span>
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper sx={{ padding: 0 }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                  sx={{ display: 'flex', flexDirection: 'row', padding: 0 }} // remove padding here
                >
                  <MenuItem onClick={handleClose}><CiTextAlignLeft className="text-xl"/></MenuItem>
                  <MenuItem onClick={handleClose}><CiTextAlignCenter className="text-xl"/></MenuItem>
                  <MenuItem onClick={handleClose}><CiTextAlignRight className="text-xl"/></MenuItem>
                  <MenuItem onClick={handleClose}><CiTextAlignJustify className="text-xl"/></MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
