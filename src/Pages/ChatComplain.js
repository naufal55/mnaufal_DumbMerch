import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import InputColumn from "../Atom/InputColumn";
import ChatBubblesL from "../Component/ChatBubblesR";
import ChatBubblesR from "../Component/ChatBubblesL";
import ChatList from "../Component/ChatList";

const ChatComplain = () => {
  return (
    
    
      <Row className="mx-5 bg-none" style={{height:"85vh"}}>
        <Col md={4} className="border border-bottom-0 border-top-0 border-start-0 border-white" style={{height:"85vh"}}>
          <Card className="my-2 h-auto bg-dark">
            <ChatList 
              src="https://bootdey.com/img/Content/avatar/avatar5.png" 
              user="Admin" 
              messages="yes, is there anything can i help ?"/>
          </Card>
        </Col>
        <Col md={8} className="border border-0">
          <div className="position-relative overflow-auto" style={{height:"70vh"}}>
              <div className="d-flex flex-column mt-3 text-light">
                <ChatBubblesL
                  src="https://bootdey.com/img/Content/avatar/avatar1.png" 
                  messages="Hello admin, I need your help"
                />
                <ChatBubblesR
                  src="https://bootdey.com/img/Content/avatar/avatar5.png" 
                  messages="yes, is there anything can i help ?"
                /> 
               </div>
          </div>
          <div class="flex-grow-0 py-3 px-4 border-top">
            <InputColumn type="text" holder="Send Message"/>
          </div>
        </Col>
        
      </Row>
          

  );
};

export default ChatComplain;
