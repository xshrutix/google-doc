// Import the necessary library
import React from "react"; // The core React library

// Create a Context for the Tool. Context provides a way to pass data through the component tree 
// without having to pass props down manually at every level.
const ToolContext = React.createContext();

// Export the Provider of the ToolContext. The Provider component is used higher in the tree and 
// allows descendant components to consume the context's value. It accepts a prop called "value"
// which is passed to consuming components.
export const ToolProvider = ToolContext.Provider;

// Export the Consumer of the ToolContext. Any component wrapped in the Consumer component will 
// have access to the context's value.
export const ToolConsumer = ToolContext.Consumer;

// Export the ToolContext. This is used when there is a need to use the context in a component 
// that is not a child of the provider, or to have easier access to the context's value.
export default ToolContext;
