import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Avatar from '@mui/material/Avatar';
import app from '../assets/apps.png'
import {
  MdPlaylistAdd,
  MdNavigateNext,
} from "react-icons/md";

export default function ExtensionDropDown() {
  // State for dropdown open/close
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  // Toggle dropdown open/close
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Close dropdown when clicking outside
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // Handle keyboard events
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // Return focus to the button when transitioning from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="">
      {/* Dropdown Button */}
      <Button
        sx={{ textTransform: "none", minWidth: 1, padding: 0 }}
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <span className="text-black">Extensions</span>
      </Button>

      {/* Popper and Menu */}
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
            {/* Menu Paper */}
            <Paper
              sx={{
                borderRadius: 4,
                width: 350,
                maxHeight: 500,
                overflowY: "auto",
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                {/* Menu List */}
                <MenuList
                  className="rounded-sm"
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {/* Menu Items */}
                  <Box className="mb-2">
                    {/* Add-ons */}
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-base">
                        <MdPlaylistAdd className="mr-2 text-2xl" /> Add-ons
                      </div>
                      <MdNavigateNext className="ml-auto" />
                    </MenuItem>

                    {/* Apps script */}
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-base">
                        <Avatar sx={{height:30 , width:30 , backgroundColor:'transparent'}} className="h-3/5 w-3/5" variant="square"><img className="mr-1" src={app} alt="app" /></Avatar>
                        Apps script
                      </div>
                      <span className="text-sm ml-auto text-gray-500">
                        Ctrl+Shift+C
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
