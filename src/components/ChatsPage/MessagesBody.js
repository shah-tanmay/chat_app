import React, { Component, useContext, useEffect, useRef, useState } from "react";
import { Segment, Card } from "semantic-ui-react";
import moment from "moment";
import LanguageContext, { LanguageProvider } from "../LanguageContext";
import axios from "axios";
import Message from "./Message";
 const  MessagesBody = ({ messages, user, typingUser } )=>{
 
  let scrollref = useRef();
  const [msgs, setmsgs] = useState([]);

   
    useEffect(() => {
      
      window.scrollTo({ behavior: 'smooth', top: scrollref.current.offsetTop })
      
    }, [])
    // useEffect(() => {
    //   console.log(messages);
    //  setmsgs(messages.map(m=>translateLang(m.message)))
    // }, [messages])
    // useEffect(() => {
    //   console.log(msgs);
    // }, [msgs])
    
    
    
    return (
      <Segment style={{ height: "calc( 100vh - 56px - 147px)" }}>
        <div
          ref={scrollref}
          style={{
            height: "calc( 100vh - 56px - 147px - 35px)",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              minHeight: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: ".1em",
              paddingRight: ".5em",
            }}
          >
            {messages.length > 0 &&
              messages.map((message, i) => {
                // console.log(message);
                // var msg = translateLang(message);                
                 return <Message message={message} user = {user}/>
              })}
            {typingUser &&
              typingUser.map((name) => (
                <div key={name} className="typing-user">
                  {`${name[0].toUpperCase() + name.slice(1)} is typing . . .`}
                </div>
              ))}
          </div>
        </div>
      </Segment>
    );
}
// export class MessagesBody extends Component {
//   static contextType = LanguageContext;

//   constructor(props) {
//     super(props);
//     this.state = {msgs:[]};
//   }

//   componentDidMount() {
//     this.scrollDown();
//     let { messages } = this.props;
//     this.translate(messages);
//   }
//   componentDidUpdate() {
//     this.scrollDown();
//   }
//   translate(messages) {
//     console.log(messages);
//     this.setState({ msgs: messages.map(m => this.translatemsg(m)) });
//   }
//   subscriptionKey = '1907fee8aa484fe28d3e8b743436c252';
//   region = 'centralindia';
//   languageToCodeMap = {
//     English: "en",
//     Tamil: "ta",
//     Telgu: "te",
//     Hindi: "hi",
//   };
//   translateLang = async (message) => {
//     try {

//       const res = await axios.post(`https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${this.languageToCodeMap[this.context.language]}`, [{ "text": message }], {
//         headers: {
//           'Ocp-Apim-Subscription-Key': this.subscriptionKey,
//           'Ocp-Apim-Subscription-Region': this.region,
//           // 'Content-type': 'application/json',
//           // 'X-ClientTraceId': uuidv4().toString()
//         }
//       })
//       console.log(res.data[0].translations[0].text);
//       return res.data[0].translations[0].text;
//     } catch (error) {
//       console.log(error);
//       return "We were unable to translate this message";
//     }
//   }



//   scrollDown() {
//     const { contaniner } = this.refs;
//     contaniner.scrollTop = contaniner.scrollHeight;
//   }
//   render() {
    
//     let { messages, user, typingUser } = this.props;
//     const { language } = this.context;
//     const languageToCodeMap = {
//       English: "en",
//       Tamil: "ta",
//       Telgu: "te",
//       Hindi: "hi",
//     };
//     var key_var = '1907fee8aa484fe28d3e8b743436c252';
//     var subscriptionKey = key_var;
//     var region_var = 'centralindia';
//     var region = region_var;

//     const translateLang = async (message) => {
//       try {

//         const res = await axios.post(`https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${languageToCodeMap[language]}`, [{ "text": message.message }], {
//           headers: {
//             'Ocp-Apim-Subscription-Key': this.subscriptionKey,
//             'Ocp-Apim-Subscription-Region': this.region,
//             // 'Content-type': 'application/json',
//             // 'X-ClientTraceId': uuidv4().toString()
//           }
//         })
//         console.log(res.data[0].translations[0].text);
//         return {
//           ...message,
//           message: res.data[0].translations[0].text
//         };
//       } catch (error) {
//         console.log(error);
//         return {
//           ...message,
//           message: "We were unable to translate this message"
//         }
//       }
//     }

//     return (
//       <Segment style={{ height: "calc( 100vh - 56px - 147px)" }}>
//         <div
//           ref="contaniner"
//           style={{
//             height: "calc( 100vh - 56px - 147px - 35px)",
//             overflowY: "auto",
//           }}
//         >
//           <div
//             style={{
//               minHeight: "100%",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "flex-end",
//               padding: ".1em",
//               paddingRight: ".5em",
//             }}
//           >
//             {messages.length > 0 &&
//               messages.map((message, i) => {
//                 // console.log(message);
//                 // var msg = translateLang(message);
//                 translateLang(message).then(message=>{
//                   console.log(message);
//                   this.setState({
//                     msgs:[
//                       ...this.state.msgs,
//                       message
//                     ]
//                   })
//                  })
//                  console.log(this.state.msgs);
//                  return (
                  
//                   <Card key={message.id} fluid style={{ marginTop: "0px" }}>
//                     <Card.Content
//                       style={{ padding: "3px 10px" }}
//                       textAlign={
//                         message.sender === user.nickname ? "right" : "left"
//                       }
//                     >
//                       {/* <h3>{this.state.msgs[i]}</h3> */}
//                       <h3>{this.state.msgs[i].message}</h3>
//                       {message.sender[0].toUpperCase() +
//                         message.sender.slice(1)}{" "}
//                       sent this message @ {moment(message.timef).fromNow()}
//                     </Card.Content>
//                   </Card>
              

//             )
//               })}
//             {typingUser &&
//               typingUser.map((name) => (
//                 <div key={name} className="typing-user">
//                   {`${name[0].toUpperCase() + name.slice(1)} is typing . . .`}
//                 </div>
//               ))}
//           </div>
//         </div>
//       </Segment>
//     );
//   }
// }

export default MessagesBody;
