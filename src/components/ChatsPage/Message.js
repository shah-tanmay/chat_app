import axios from 'axios';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'semantic-ui-react';
import LanguageContext from '../LanguageContext';

const Message = ({message,user}) => {
    const [msg, setmsg] = useState(message);
    const languageToCodeMap = {
        English: "en",
        Tamil: "ta",
        Telgu: "te",
        Hindi: "hi",
      };
      var key_var = '1907fee8aa484fe28d3e8b743436c252';
      var subscriptionKey = key_var;
      var region_var = 'centralindia';
      var region = region_var;
  
      const {language} =  useContext(LanguageContext);
      const translateLang = async (message) => {
        try { 
  
  
          const res = await axios.post(`https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${languageToCodeMap[language]}`, [{ "text": message.message }], {
            headers: {
              'Ocp-Apim-Subscription-Key': subscriptionKey,
              'Ocp-Apim-Subscription-Region': region,
              // 'Content-type': 'application/json',
              // 'X-ClientTraceId': uuidv4().toString()
            }
          })
          console.log(res.data[0].translations[0].text);
          setmsg({
            ...message,
            message : res.data[0].translations[0].text
          })
          return  {
            ...message,
            message : res.data[0].translations[0].text
        };
        } catch (error) {
          console.log(error);
          return  message
          
        }
      };
      useEffect(() => {
       translateLang(message);
      }, [])
      
  
  return (
    <div>
         <Card key={msg.id} fluid style={{ marginTop: "0px" }}>
                    <Card.Content
                      style={{ padding: "3px 10px" }}
                      textAlign={
                        msg.sender === user.nickname ? "right" : "left"
                      }
                    >
                      <h3>{(msg.message)}</h3>
                      {/* <h3>{msgs[i] && msgs[i].message}</h3> */}
                      {msg.sender[0].toUpperCase() +
                        msg.sender.slice(1)}{" "}
                      sent this message @ {moment(msg.timef).fromNow()}
                    </Card.Content>
                  </Card>
                  
    </div>
  )
}

export default Message