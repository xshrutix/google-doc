// Import necessary packages and components from the respective libraries
import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

// Import necessary icon components from react-icons
import {
  MdOutlineRequestPage,
  MdOutlinePostAdd,
  MdNotes,
  MdInsertChartOutlined,
  MdNavigateNext,
} from "react-icons/md";
import { BiImageAlt } from "react-icons/bi";
import {  IoIosArrowDropdown } from "react-icons/io";
import {  RiTableLine } from "react-icons/ri";
import { TbMathPi, TbHash, TbPageBreak } from "react-icons/tb";
import {
  AiOutlineLine,
} from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import { CgSmartHomeHeat } from "react-icons/cg";
import { ImImage, ImPageBreak } from "react-icons/im";
import { RiOmega } from "react-icons/ri";

// InsertDropDown component
export default function InsertDropDown() {
  // Create state for open/close status of dropdown
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  // Function to handle toggling of dropdown
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Function to handle closing of dropdown
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // Function to handle keydown events on the dropdown list
  function handleListKeyDown(event) {
    if (event.key === "Tab" || event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // Effect to manage focus state when dropdown is opened or closed
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

    return (
      // Use Popper component to manage placement and transitions of dropdown
    // Use ClickAwayListener to detect click events outside of dropdown
    // Use MenuList to provide list of dropdown items
    // Dropdown items are represented as MenuItems with associated icons and actions
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
        <span className="text-black">Insert</span>
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
            <Paper
              sx={{
                borderRadius: 4,
                width: 350,
                maxHeight: 500,
                overflowY: "auto",
              }}
            >
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
                        <BiImageAlt className="mr-2" /> Image
                      </div>
                      <MdNavigateNext className="ml-auto" />
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <RiTableLine className="mr-2" /> Table
                      </div>
                      <MdNavigateNext className="ml-auto" />
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <ImImage className="mr-2" /> Drawing
                      </div>
                      <MdNavigateNext className="ml-auto" />
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdInsertChartOutlined className="mr-2" /> Chart
                      </div>
                      <MdNavigateNext className="ml-auto" />
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <AiOutlineLine className="mr-2" /> Horizontal Line
                      </div>
                      <div className="ml-auto"></div>
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <GrEmoji className="mr-2" /> Emoji
                      </div>
                      <div className="ml-auto"></div>
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <CgSmartHomeHeat className="mr-2" /> Smart Chips
                      </div>
                      <MdNavigateNext className="ml-auto" />
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <IoIosArrowDropdown className="mr-2" /> Redo
                      </div>
                      <div className="ml-auto"></div>
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdNotes className="mr-2" /> Footnote
                      </div>
                      <div className="ml-auto text-sm text-gray-400">
                        Ctrl+Alt+F
                      </div>
                    </MenuItem>
                  </Box>
                  <Box className="border-b-2 mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdOutlinePostAdd className="mr-2 text-xl" /> Building
                        Blocks
                      </div>
                      <MdNavigateNext className="ml-auto" />
                    </MenuItem>
                  </Box>
                  <Box className="border-b-2 mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <RiOmega className="mr-2 text-xl" /> Special characters
                      </div>
                      <MdNavigateNext className="ml-auto" />
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <TbMathPi className="mr-2 text-base" /> Equation
                      </div>
                    </MenuItem>
                  </Box>
                  <Box className="mb-2">
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <MdOutlineRequestPage className="mr-2 text-xl" />{" "}
                        Watermark
                      </div>
                      <MdNavigateNext className="ml-auto" />
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <ImPageBreak className="mr-2 text-base" /> Header and
                        Footer
                      </div>
                      <MdNavigateNext className="ml-auto" />
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <TbHash className="mr-2 text-base" /> Page Number
                      </div>
                      <MdNavigateNext className="ml-auto" />
                    </MenuItem>
                    <MenuItem
                      className="flex justify-between items-center"
                      onClick={handleClose}
                    >
                      <div className="flex items-center text-sm">
                        <TbPageBreak className="mr-2 text-base" /> Page Break
                      </div>
                      <MdNavigateNext className="ml-auto" />
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
