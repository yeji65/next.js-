import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top(){
    return (
        <div>
            <div style={{display:"flex", paddingTop: 20}}>
               
            <Header as="h1">Next.js 연습</Header>
            </div>
            <Gnb />
        </div>
        );
}