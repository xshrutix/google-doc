// Import necessary hooks, components, and icons.
import { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Fab from "@material-ui/core/Fab";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// Define the SideBar component.
export default function SideBar() {
  // Initialize open state to false.
  const [open, setOpen] = useState(false);

  // Define the function to toggle the drawer.
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const iconUrls = [
    // URLs for icons...
    "https://img.icons8.com/color/48/google-calendar--v2.png",
    "https://img.icons8.com/color/48/google-keep.png",
    "https://play-lh.googleusercontent.com/pjUulZ-Vdo7qPKxk3IRhnk8SORPlgSydSyYEjm7fGcoXO8wDyYisWXwQqEjMryZ_sqK2",
    "https://img.icons8.com/color/48/google-contacts.png",
    "https://img.icons8.com/fluency/48/google-maps-new.png",
    "https://img.icons8.com/office/16/horizontal-line.png",
    "https://img.icons8.com/ios/50/plus-math--v1.png",
  ];
  const iconOnClickUrls = [
    // URLs for icon clicks...
    "https://calendar.google.com/",
    "https://keep.google.com/",
    "https://developers.google.com/tasks",
    "https://contacts.google.com/",
    "https://www.google.com/maps/",
    "na",
    "https://chrome.google.com/webstore?hl=en",
  ];

  return (
    // Return the JSX for the sidebar.
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: open ? "0" : "-250px",
          height: "100vh",
          width: "60px",
          backgroundColor: "#F3F4F6",
          zIndex: 9999,
          transition: "right 0.3s",
        }}
      >
        <div style={{ height: "20px" }}></div>
        <List style={{ marginTop: "30px", padding: "10px 0" }}>
          {iconUrls.map((url, index) => (
            <ListItem
              button
              key={index}
              style={{ marginBottom: "10px", marginRight: "5px" }}
            >
              <ListItemIcon>
                <a href={iconOnClickUrls[index]}>
                  <img className="h-6 w-6" src={url} alt={`icon-${index}`} />
                </a>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </div>
      <div
        style={{
          marginLeft: open ? "250px" : 0,
          transition: "margin-left 0.3s",
        }}
      >
        {/* Your main content goes here */}
      </div>
      <Fab
        color="default"
        aria-label="add"
        onClick={toggleDrawer}
        style={{
          position: "fixed",
          right: open ? "0px" : 0,
          bottom: 20,
          zIndex: 99999999,
          width: "30px",
          height: "30px",
          minWidth: "30px",
          borderRadius: "50% 0 0 50%",
          backgroundColor: open ? "#F7FAFC" : "transparent",
          transition: "right 0.3s",
        }}
      >
        {open ? (
          <ArrowForwardIosIcon style={{ color: "gray", fontSize: "0.8rem" }} />
        ) : (
          <ArrowBackIosIcon style={{ color: "gray", fontSize: "0.8rem" }} />
        )}
      </Fab>
    </div>
  );
}
