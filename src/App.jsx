// Import the necessary dependencies
import { useState } from 'react' // React state hook
import SideBar from './Components/SidePanel' // Sidebar component
import MainToolBAr from './Pages/Main' // Main toolbar component
import {ToolProvider} from './ToolContext' // Context provider for tool state

// Define the main App component
function App() {
  // Use React's state hook to define a state variable for the selected tool
  // and a setter function to update it
  const [selectedTool, setSelectedTool] = useState(null);
  
  // Return the component JSX
  return (
    // Use the ToolProvider to make the selected tool state available to child components
    // The value prop on the provider passes the current value of selectedTool and the function to set it down the component tree
    <ToolProvider value={[selectedTool, setSelectedTool]}>
    
    {/* Wrapping div for the app, with some styling */}
    <div className="app bg-gray-100">
      
      {/* Render the Sidebar component */}
      <SideBar />
      
      {/* Render the MainToolBar component */}
      <MainToolBAr />
       
    </div>
    
    {/* Close the ToolProvider */}
    </ToolProvider>
  )
}

// Export the App component as the default export
export default App
