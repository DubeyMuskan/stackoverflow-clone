// import React from 'react';

// const MessageParser = ({ children, actions }) => {
//   const parse = (message) => {
//     console.log("Current message",message);
//   };

//   return (
//     <div>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, {
//           parse: parse,
//           actions: {},
//         });
//       })}
//     </div>
//   );
// };

// export default MessageParser;

class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      message = message.toLowerCase();
      console.log(message);
  
      if (
        message.includes("hi") ||
        message.includes("hello") ||
        message.includes("hey")
      ) {
        return this.actionProvider.greet({ withAvatar: true });
      }
      if (
        message.includes("react") ||
        message.includes("reactjs") 
      ){
        return this.actionProvider.defineReact({ withAvatar: true });
      }
      if (
        message.includes("java") 
      ){
        return this.actionProvider.defineJava({ withAvatar: true });
      }
      if (
        message.includes("css") 
      ){
        return this.actionProvider.defineCss({ withAvatar: true });
      }
      if (
        message.includes("html") 
      ){
        return this.actionProvider.defineHtml({ withAvatar: true });
      }
      if (
        message.includes("node") 
      ){
        return this.actionProvider.defineNode({ withAvatar: true });
      }
      if (
        message.includes("android") 
      ){
        return this.actionProvider.defineAndroid({ withAvatar: true });
      }
      if (
        message.includes("php") 
      ){
        return this.actionProvider.definePhp({ withAvatar: true });
      }
      if (
        message.includes("c#") 
      ){
        return this.actionProvider.defineCsharp({ withAvatar: true });
      }
      if (
        message.includes("javascript") 
      ){
        return this.actionProvider.defineJavascript({ withAvatar: true });
      }
      
  
  
    
  
      if (message.length>10) {
        return this.actionProvider.handleError();
      }
  
      if (
        message.includes("joke") ||
        message.includes("jokes") ||
        message.includes("funny")
      ) {
        return this.actionProvider.handleJoke();
      }
  
      if (message.includes("thanks") || message.includes("thank you")) {
        return this.actionProvider.handleThanks();
      }
  
      return this.actionProvider.handleOptions({ withAvatar: true });
    }
  }
  
  export default MessageParser;