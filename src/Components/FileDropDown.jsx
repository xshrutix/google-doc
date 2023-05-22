import Button from "@mui/material/Button";
import { Box } from "@mui/material";

// More Material-UI components and some icons are imported for constructing the dropdown menu
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { MdOutlineMail ,MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { TiDocumentText } from 'react-icons/ti'
import { BiFolder , BiCheckCircle } from 'react-icons/bi'
import { IoMdCopy } from 'react-icons/io'
import { RiUserShared2Line , RiHistoryFill } from 'react-icons/ri'
import { TbDownload } from 'react-icons/tb'
import { VscTrash } from 'react-icons/vsc'
import { AiOutlineInfoCircle , AiFillPrinter } from 'react-icons/ai'
import { GrLanguage } from 'react-icons/gr'
import {HiOutlineDocumentText} from 'react-icons/hi'
import React from "react";

export default function FileDropDown() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Additional handlers remain the same for handling click and keydown events
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  // The function to handle keyboard navigation within the dropdown menu
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // useEffect to return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // The rest of the component remains largely the same, with additional menu items defined

  return (
    <div className="">
          <Button sx={{textTransform: "none" , minWidth:1 , padding:0}}
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
              onClick={handleToggle}
    
      >
        <span className="text-black">
          File 
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
            <Paper className="text-sm" sx={{borderRadius:4 , width:300}}>
              <ClickAwayListener onClickAway={handleClose}>
                              <MenuList
                                  className="rounded-xl text-sm"
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                              >
                                <Box className="border-b-2 text-sm"  sx={{fontSize:'20px'}}>
                                      <MenuItem className="flex text-sm" onClick={handleClose}>
                                          <TiDocumentText className="mr-2"/> New
                                      </MenuItem>
                                       <MenuItem className="flex" onClick={handleClose}>
                                          <BiFolder  className="mr-2"/> Open
                                      </MenuItem>
                                      <MenuItem className="flex" onClick={handleClose}>
                                          <IoMdCopy  className="mr-2"/> Make a copy
                                      </MenuItem>
                                  </Box>
                                  <Box className="border-b-2">
                                      <MenuItem className="flex" onClick={handleClose}>
                                          <RiUserShared2Line  className="mr-2"/> Share
                                      </MenuItem>
                                       <MenuItem className="flex" onClick={handleClose}>
                                          <MdOutlineMail  className="mr-2"/> Email
                                      </MenuItem>
                                      <MenuItem className="flex" onClick={handleClose}>
                                          <TbDownload  className="mr-2"s/> Download
                                      </MenuItem>
                                  </Box>
                                   <Box className="border-b-2">
                                      <MenuItem className="flex" onClick={handleClose}>
                                          <MdOutlineDriveFileRenameOutline  className="mr-2"/> Rename
                                      </MenuItem>
                                       <MenuItem disabled={true} className="flex" onClick={handleClose}>
                                          <VscTrash  className="mr-2"/> Move to Trash
                                      </MenuItem>
                                      
                                  </Box>
                                  <Box className="border-b-2">
                                      <MenuItem disabled={true} className="flex" onClick={handleClose}>
                                          <RiHistoryFill  className="mr-2"/> Version History
                                      </MenuItem>
                                       <MenuItem className="flex" onClick={handleClose}>
                                          <BiCheckCircle className="mr-2"/> Make available offline
                                      </MenuItem>
                                      
                                  </Box>
                                  <Box>
                                      <MenuItem className="flex" onClick={handleClose}>
                                          <AiOutlineInfoCircle  className="mr-2"/> Details
                                      </MenuItem>
                                       <MenuItem className="flex" onClick={handleClose}>
                                          <GrLanguage  className="mr-2"/> Language
                                      </MenuItem>
                                      <MenuItem className="flex" onClick={handleClose}>
                                          <HiOutlineDocumentText  className="mr-2"/> Page Setup
                                      </MenuItem>
                                       <MenuItem className="flex" onClick={handleClose}>
                                          <AiFillPrinter  className="mr-2"/> Print
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
