import {
    createChatBotMessage,
    createCustomMessage,
  } from 'react-chatbot-kit';
  import MedicineDelivery from './components/redirectSite'
  import CustomMessage from '../src/components/customMessage';
  import CoBotAvatar from './components/botAvatar';
const config = {
    initialMessages: [
        createChatBotMessage(
          `Hi I'm Muskan. I’m here to help you explain how I work.`
        ),
        createChatBotMessage(
          "Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
          {
            withAvatar: false,
            delay: 500,
          }
        ),
        createCustomMessage('Test', 'custom'),
      ],
  botName: 'Expert',
  state: {
    gist: '',
    infoBox: '',
  },
  
//   customMessages: {
//     custom: (props) => <CustomMessage {...props} />,
//   },
  customComponents: {
    // Replaces the default header
   header: () => <div style={{ backgroundColor: 'orange', padding: "10px", borderRadius: "10px",fontWeight:'bold', }}>Chat with Expert</div>,
   botAvatar: (props) => <CoBotAvatar {...props} /> 
   
 },
 customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: 'orange',
    },
  },
  widgets: [
    {
      widgetName: "stackoverflow",
      widgetFunc: (props) => <MedicineDelivery />
    }
  ]
};

export default config;