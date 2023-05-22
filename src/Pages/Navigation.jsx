// Importing necessary packages and components
import  { useState } from 'react';
import { BiUserCircle } from 'react-icons/bi'; // User icon
import Icon from '../assets/Icon.png'; // Application icon
import FileDropDown from '../Components/FileDropDown'; // Dropdown for file options
// Importing various icons for the navbar
import {RiHistoryFill} from 'react-icons/ri'
import { MdOutlineStarBorderPurple500, MdOutlineDriveFileMove, MdOutlineInsertComment , MdArrowDropDown } from 'react-icons/md';
import { BsCloudCheck } from 'react-icons/bs';
import { Button, IconButton } from '@mui/material'; // Material UI components
import { TbLock } from 'react-icons/tb'; // Lock icon for the share button
// Importing dropdown components
import EditDropDown from '../Components/EditDropDown';
import ViewDropDown from '../Components/ViewDropDown';
import InsertDropDown from '../Components/InsertDropDown';
import FormatDropDown from '../Components/FormatDropDown';
import ToolDropDown from '../Components/ToolDropDown';
import ExtensionDropDown from '../Components/ExtensionDropDown';
import HelpDropDown from '../Components/HelpDropDown';
import Popup from '../Components/Popup'; // Popup component

const Navbar = () => {
  // useState hook for controlling the popup and the document name
  const [showPopup, setShowPopup] = useState(false);
  const [documentName, setDocumentName] = useState('');

  // Function to open the popup
  const openPopup = () => {
    setShowPopup(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    setDocumentName(event.target.value);
  };

  // Function to handle share button click
  const handleShareClick = () => {
    openPopup();
  };

  // Return the Navbar component
  return (
    // The main container
    <div className="w-full flex justify-between items-center px-3 pb-1 border-b bg-slate-50">
      {/* Left section */}
      <div className="w-full flex justify-start items-center overflow-x-hidden md:overflow-visible">
        {/* Application icon */}
        <img className="w-9 h-10 bg-slate-50" src={Icon} alt="icon" />
        {/* File and document related features */}
        <div className="flex flex-col bg-slate-50">
          <div className="flex items-center">
            {/* Document name input */}
            <input
              maxLength={25}
              type="text"
              className="font-medium text-base px-2 w-40 bg-slate-50 pb-0 pt-0 mt-2 placeholder-gray-700"
              placeholder="Untitled Document"
              value={documentName}
              onChange={handleInputChange}
              style={{textDecorationColor:'black'}}
            />
            {/* Document feature icons */}
            <MdOutlineStarBorderPurple500 className="text-xl mt-2 ml-1" />
            <MdOutlineDriveFileMove className="text-xl mt-2 ml-2" />
            <BsCloudCheck className="text-xl mt-2 ml-2" />
          </div>
          {/* Dropdown options */}
          <div className="flex items-center">
            {/* Each dropdown is contained within a button */}
            {/* File options */}
            <button style={{ zIndex: '999' }} className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-slate-50 rounded-md">
              <FileDropDown />
            </button>
            {/* Edit options */}
            <button style={{ zIndex: '999' }} className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-slate-50 rounded-md">
              <EditDropDown />
            </button>
            {/* View options */}
            <button style={{ zIndex: '999' }} className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-slate-50 rounded-md">
              <ViewDropDown />
            </button>
            {/* Insert options */}
            <button style={{ zIndex: '999' }} className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-slate-50 rounded-md">
              <InsertDropDown />
            </button>
            {/* Format options */}
            <button style={{ zIndex: '999' }} className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-slate-50 rounded-md">
              <FormatDropDown />
            </button>
            {/* Tool options */}
            <button style={{ zIndex: '999' }} className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-slate-50 rounded-md">
              <ToolDropDown />
            </button>
            {/* Extension options */}
            <button style={{ zIndex: '999' }} className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-slate-50 rounded-md">
              <ExtensionDropDown />
            </button>
            {/* Help options */}
            <button style={{ zIndex: '999' }} className="text-sm whitespace-nowrap px-2 py-1 font-medium hover:bg-slate-50 rounded-md">
              <HelpDropDown />
            </button>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center flex-shrink-0 pl-3 gap-x-2">
        {/* Icon buttons */}
        <IconButton><RiHistoryFill className='text-black mt-1'/></IconButton>
        <IconButton><MdOutlineInsertComment className='font-medium text-black mt-1'/></IconButton>
        {/* Icon with dropdown */}
        <IconButton><div className='flex'><div><img className='h-8 w-8' src='https://cdn-icons-png.flaticon.com/512/8037/8037881.png'  alt="meet"/></div><div><MdArrowDropDown className='font-medium text-black mt-1'/></div></div></IconButton>
        {/* Share button */}
        <Button
          onClick={handleShareClick}
          sx={{
            minWidth: 0,
            color: 'black',
            backgroundColor: '#c2e7ff',
            marginRight: 2,
            borderRadius: 10,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#b2ebf2',
              '@media (hover: none)': {
                backgroundColor: '#bbdefb',
              },
            },
          }}
        >
          <div className="flex items-center px-3">
            <TbLock className="text-xl mr-5" />{' '}
            <p style={{ textDecorationColor: '#001d35' }} className="mt-1">
              Share
            </p>
          </div>
        </Button>
        {/* User icon */}
        <BiUserCircle style={{ zIndex: '99999' }} className="text-4xl" />
        {/* Popup */}
        <Popup isOpen={showPopup} onClose={closePopup} documentName={documentName} />
      </div>
    </div>
  );
};

export default Navbar;
