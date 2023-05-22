/* eslint-disable react/prop-types */
// Import necessary packages, components, and icons.
import Modal from "react-modal";
import "./Popup.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TbSettings } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { BiLock, BiDownArrow } from "react-icons/bi";
import { useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Set the root element for the modal.
Modal.setAppElement("#root");

// Define the Popup component.
const Popup = ({ isOpen, onClose, documentName }) => {
  // Define state for dropdownOpen, menu, and selectedOption.
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menu, setMenu] = useState("Restricted");
  const [selectedOption, setSelectedOption] = useState(
    "Only people with access can see"
  );

  // Function to toggle the dropdown.
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to handle when an option in the dropdown is clicked.
  const handleOptionClick = (option) => {
    if (option === "Only people with access can see") {
      setMenu("Restricted");
    } else {
      setMenu("Public");
    }
    setSelectedOption(option);
    setDropdownOpen(false);
  };
  
  // Function to handle click on share button. It displays a toast notification.
  const handleShareClick = () => {
    toast("Link copied");
  }

  // Return the modal JSX.
    return (
      
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="popup-modal"
      overlayClassName="popup-overlay"
        >
            <ToastContainer/>
      <div>
        <div className="flex justify-between">
          <h3 className="text-2xl ">Share {documentName}</h3>
          <span className="flex">
            <AiOutlineQuestionCircle className="mr-3 text-xl" />
            <TbSettings className="text-xl" />
          </span>
        </div>
        <input
          type="text"
          placeholder="Add people and groups "
          className="w-full mt-3 mb-4 py-2 px-4 text-base bg-gray-100 border border-gray-300 rounded-md overflow-hidden focus:outline-none focus:ring focus:border-blue-500"
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        />
        <p
          style={{ marginBottom: 0, paddingBottom: 2 }}
          className="text-md font-medium "
        >
          People with access{" "}
        </p>
        <div className="flex items-center justify-between mt-4 mb-4">
          <div className="flex items-center">
            <FaUserCircle className="text-2xl mr-2" />
            <span className="text-base">example@example.com</span>
          </div>
          <div className="">
            <span className="text-base font-light">Owner</span>
          </div>
        </div>
        <p className="text-md mt-2 mb-3 font-medium ">General access </p>
        <div className="flex items-center mb-8">
          <BiLock className="text-xl mr-2" />
          <div className="relative flex-row">
            <button
              style={{ padding: 0, backgroundColor: "white" }}
              className="flex items-center bg-white text-gray-700 px-2 py-1 rounded-md focus:outline-none border-none"
              onClick={toggleDropdown}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div>{menu}</div>
                <div>
                  <span className="text-sm">{selectedOption}</span>
                </div>
              </div>
              <BiDownArrow
                className={`ml-2 ${dropdownOpen ? "transform rotate-180" : ""}`}
              />
            </button>
            {dropdownOpen && (
              <ul
                style={{ zIndex: "999999" }}
                className="absolute bg-white border border-gray-200 rounded-md mt-2"
              >
                <li
                  className={`px-4 hover:bg-gray-100 cursor-pointer ${
                    selectedOption === "Only people with access can see"
                      ? "font-semibold"
                      : "Only people with access can see"
                  }`}
                  onClick={() =>
                    handleOptionClick("Only people with access can see")
                  }
                >
                  Only people with access can see
                </li>
                <li
                  className={`px-4 hover:bg-gray-100 cursor-pointer ${
                    selectedOption === "Anyone with the link"
                      ? "font-semibold"
                      : "Anyone with the link"
                  }`}
                  onClick={() => handleOptionClick("Anyone with the link")}
                >
                  Anyone with the link
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Additional content goes here */}
        <div className="flex justify-between">
          <div>
            {/* <Button
  variant="outlined"
  startIcon={<LinkIcon />}
  
  sx={{
    backgroundColor: 'white',
    padding: 0,
    borderRadius: '20px',
    '&:hover': {
      backgroundColor: 'white',
    },
      textTransform: 'none',
    borderEndEndRadius:4,
  }}
                      > */}
            <button
              className="bg-white rounded-lg hover:bg-blue-200 ..."
              style={{
                textTransform: "none",
                color: "black",
                border: "1px solid blue",
                borderRadius: "16px",
                backgroundColor: "whitesmoke",
                outline: "none",
                cursor: "pointer",
                transition: "box-shadow 0.3s",
                boxShadow: "none",
                          }}
                          onClick={handleShareClick}
                          
            >
              <div className="flex">
                <LinkIcon className="hover:bg-blue-200" />
                Copy link
              </div>
            </button>
            {/* Copy link
                      </Button> */}
          </div>
          <div>
            <button
              style={{ textTransform: "none", backgroundColor: "#4169E1" , borderRadius:'20px' , textDecorationColor:'white', paddingLeft:24 , paddingRight:24 }}
              
                        >
                            <span className="text-white"> Done</span>
             
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Popup;
