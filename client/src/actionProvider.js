import React from 'react';

// const ActionProvider = ({ createChatBotMessage, setState, children }) => {
//   return (
//     <div>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, {
//           actions: {},
//         });
//       })}
//     </div>
//   );
// };

// export default ActionProvider;
var tagsList = [{
    id: 1,
    tagName: "javascript",
    tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question;",
},{
    id: 2,
    tagName: "python",
    tagDesc: "Python is a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax."
},{
    id: 3,
    tagName: "c#",
    tagDesc: "C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programming language developed by Microsoft"
},{
    id: 4,
    tagName: "java",
    tagDesc: "Java is a high-level object oriented programming language. Use this tag when you're having problems using or understanding the language itself. "
},{
    id: 5,
    tagName: "php",
    tagDesc: "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development"
},{
    id: 6,
    tagName: "html",
    tagDesc: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser."
},{
    id: 7,
    tagName: "android",
    tagDesc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT)."
},{
    id: 8,
    tagName: "css",
    tagDesc: "CSS is a representation style sheet language used for describing the look and formatting of HTML, XML documents and SVG elements including colors, layout, fonts, and animations"
},{
    id: 9,
    tagName: "Reactjs",
    tagDesc: "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be both efficient and flexible."
},{
    id: 10,
    tagName: "node.js",
    tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. "
}] 

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    handleOptions = (options) => {
      const message = this.createChatBotMessage(
        "How can I help you? Below are some possible options.",
        {
          widget: "overview",
          loading: true,
          terminateLoading: true,
          ...options
        }
      );
  
      this.addMessageToState(message);
    };
  

  
  
    handleError = () => {
      const message = this.createChatBotMessage(
        "click and paste your error i",
        {
          widget: "stackoverflow",
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      );
  
      this.addMessageToState(message);
    };
    greet =()=>{
        const msg="Hi Developer! hope you are doing well";
        const message = this.createChatBotMessage(msg);
        this.addMessageToState(message);
    }
    defineReact=()=>{
        const msg=tagsList[8].tagDesc
        const message = this.createChatBotMessage(msg);
        this.addMessageToState(message);
    }
    defineJava=()=>{
        const msg=tagsList[3].tagDesc
        const message = this.createChatBotMessage(msg);
        this.addMessageToState(message);
    }
    defineHtml=()=>{
        const msg=tagsList[5].tagDesc
        const message = this.createChatBotMessage(msg);
        this.addMessageToState(message);
    }
    defineJavascript=()=>{
        const msg=tagsList[0].tagDesc
        const message = this.createChatBotMessage(msg);
        this.addMessageToState(message);
    }
    definePython=()=>{
        const msg=tagsList[1].tagDesc
        const message = this.createChatBotMessage(msg);
        this.addMessageToState(message);
    }
    defineCsharp=()=>{
        const msg=tagsList[2].tagDesc
        const message = this.createChatBotMessage(msg);
        this.addMessageToState(message);
    }
    defineAndroid=()=>{
        const msg=tagsList[6].tagDesc
        const message = this.createChatBotMessage(msg);
        this.addMessageToState(message);
    }
    definePhp=()=>{
        const msg=tagsList[4].tagDesc
        const message = this.createChatBotMessage(msg);
        this.addMessageToState(message);
    }
    defineNode=()=>{
        const msg=tagsList[9].tagDesc
        const message = this.createChatBotMessage(msg);
        this.addMessageToState(message);
    }
    defineCss=()=>{
        const msg=tagsList[7].tagDesc
        const message = this.createChatBotMessage(msg);
        this.addMessageToState(message);
    }
    greet =()=>{
        const msg="Hi Developer! hope you are doing well";
        const message = this.createChatBotMessage(msg);
        this.addMessageToState(message);
    }
 
  
    handleThanks = () => {
      const message = this.createChatBotMessage("You're welcome, and stay safe!");
  
      this.addMessageToState(message);
    };
  
    addMessageToState = (message) => {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, message]
      }));
    };
  }
  
  export default ActionProvider;
  