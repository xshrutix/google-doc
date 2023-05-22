import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import {
  MdCopyAll,
  MdContentPaste,
  MdContentPasteOff,
  MdSelectAll,
  MdOutlineFindReplace,
} from "react-icons/md";
import { BiCut } from "react-icons/bi";
import { VscTrash } from "react-icons/vsc";
import { GrUndo, GrRedo } from "react-icons/gr";

// EditDropDown component exported 
export default function EditDropDown() {
  // State for managing the open/close state of the dropdown
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  // Handler for toggling the open/close state of the dropdown
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Handler for closing the dropdown when clicked outside
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  // Handler for keyboard interactions within the dropdown
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // Set focus to the button when transitioning from !open to open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <div className="">
      {/* Button to trigger the dropdown */}
      <Button
        sx={{ textTransform: "none", minWidth: 1, padding: 0 }}
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <span className="text-black">Edit</span>
      </Button>

      {/* Dropdown menu */}
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
                  {/* Undo and Redo menu items */}
                  <Box className="border-b-2 mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <GrUndo className="mr-2" /> Undo
                      </div>
                      <span className="text-sm ml-auto text-gray-500">
                        Ctrl+Z
                      </span>
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <GrRedo className="mr-2" /> Redo
                      </div>
                      <span className="text-sm ml-auto text-gray-500 mb-3">
                        Ctrl+Y
                      </span>
                    </MenuItem>
                  </Box>

                  {/* Cut, Copy, Paste, Paste without formatting menu items */}
                  <Box className="border-b-2 mt-2 mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <BiCut className="mr-2" /> Cut
                      </div>
                      <span className="text-sm ml-auto text-gray-500">
                        Ctrl+X
                      </span>
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdCopyAll className="mr-2" /> Copy
                      </div>
                      <span className="text-sm ml-auto text-gray-500 ">
                        Ctrl+C
                      </span>
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdContentPaste className="mr-2" /> Paste
                      </div>
                      <span className="text-sm ml-auto text-gray-500 ">
                        Ctrl+V
                      </span>
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm mb-3">
                        <MdContentPasteOff className="mr-2" /> Paste without
                        formatting
                      </div>
                      <span className="text-sm ml-auto text-gray-500 mb-3  ">
                        Ctrl+Shift+V
                      </span>
                    </MenuItem>
                  </Box>

                  {/* Select all and Delete menu items */}
                  <Box className="border-b-2 mt-2 mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdSelectAll className="mr-2" /> Select all
                      </div>
                      <span className="text-sm ml-auto text-gray-500">
                        Ctrl+A
                      </span>
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm mb-3">
                        <VscTrash className="mr-2 " /> Delete
                      </div>
                    </MenuItem>
                  </Box>

                  {/* Find and replace menu item */}
                  <Box className="mt-2 mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdOutlineFindReplace className="mr-2" /> Find and
                        replace
                      </div>
                      <span className="text-sm ml-auto text-gray-500">
                        Ctrl+H
                      </span>
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
