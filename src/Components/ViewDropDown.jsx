import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { HiCheck } from 'react-icons/hi'
import {BsFullscreen} from 'react-icons/bs'

// Component for a dropdown menu with "View" options
export default function ViewDropDown() {
  // State variable for the open/close status of the dropdown
  const [open, setOpen] = React.useState(false);

  // Reference to the anchor element, which the dropdown is relatively positioned to
  const anchorRef = React.useRef(null);

  // Function to toggle the dropdown open/closed
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Function to close the dropdown, except if the event originates from the anchorRef element
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // Function to handle keydown events, to close the dropdown on 'Tab' or 'Escape'
  function handleListKeyDown(event) {
    if (event.key === "Tab" || event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // Effect to focus on the anchor element when the dropdown closes
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="">
      <Button
        sx={{ textTransform: "none", minWidth: 1, padding: 0 }}
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <span className="text-black">View</span>
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
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper sx={{ borderRadius: 4, width: 300 }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  className="rounded-xl"
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <Box className="border-b-2 mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdOutlineModeEditOutline className="mr-2" /> Mode
                      </div>
                      
                                      </MenuItem>
                                      
                    
                                  </Box>
                                  <Box className="border-b-2 mt-2 mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <HiCheck className="mr-2" /> Show print layout
                      </div>
                     
                                      </MenuItem>
                                      <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <HiCheck className="mr-2" /> Show ruler
                      </div>
                      
                                      </MenuItem>
                                      <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <HiCheck className="mr-2" /> Show outline
                      </div>
                      
                                      </MenuItem>
                                       <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm ml-5">
                         Show equation toolbar
                      </div>
                     
                                      </MenuItem>
                                       <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm mb-3 ml-5">
                         Show non-printing characters
                      </div>
                     
                                      </MenuItem>
                                      
                    
                                  </Box>
                                 
                                  <Box className="mt-2 mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <BsFullscreen className="mr-2" /> Full Screen
                      </div>
                      
                                      </MenuItem>
                                     
                                      
                    
                  </Box>
                  
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
