import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import {GrView} from 'react-icons/gr'
import MenuList from "@mui/material/MenuList";
import {
  MdOutlineArrowDropDown,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import { BiMessageAltEdit } from "react-icons/bi";

export default function EditButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

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

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="ml-16">
      <Button
        sx={{ textTransform: "none" }}
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <span className="text-black flex  border-gray-300">
          <MdOutlineModeEditOutline className="text-xl mr-2" />
          Editing
          <MdOutlineArrowDropDown className="text-2xl ml-8 mr-2" />
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
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>
                    <div className="flex items-center">
                      <MdOutlineModeEditOutline className="mr-2" />
                      <div>
                        Editing
                        <h6 className="text-xs mt-1">Edit document directly</h6>
                      </div>
                    </div>
                                  </MenuItem>
                                  <MenuItem onClick={handleClose}>
                    <div className="flex items-center">
                      <BiMessageAltEdit  className="mr-2" />
                      <div>
                        Suggesting
                        <h6 className="text-xs mt-1">Edits becomes suggestion</h6>
                      </div>
                    </div>
                                  </MenuItem>
                                   <MenuItem onClick={handleClose}>
                    <div className="flex items-center">
                      <GrView  className="mr-2" />
                      <div>
                        Viewing
                        <h6 className="text-xs mt-1">Read or print final document</h6>
                      </div>
                    </div>
                  </MenuItem>
                 
                  
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
