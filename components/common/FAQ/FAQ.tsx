import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import s from "./FAQ.module.scss";
import { faq } from "constant/AppConstant";
import FAQcard from "../FAQcard";
import { Collapse } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const FAQ: FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  // const [query, setQuery] = useState();
  // const[show, setShow] = useState(false);
  return (
    // <div className={`${s.topSection} boxed text-center`}>
    //     <h1 className="h1 fw600 f-konexy c-secondary mob-mb1">
    //     Most Recent Questions asked.
    //     </h1>

    //     <div className={s.queries}>

    //     {faq.map((query, i) => {
    //         return <FAQcard key={i} data={query} />;
    //       })}

    //     </div>
    //     </div>

   
    

    <Collapse 
    className={`${s.question}  boxed text-center queries`}
    expandIcon={({ isActive }) => isActive ? <MinusOutlined className={s.minus} /> : <PlusOutlined className={s.plus}/>
  }
    bordered={false} 
    show-arrow={false}    
    defaultActiveKey={["1"]}    
     onChange={onChange}>

<div className={`${s.topSection} boxed text-center`}>
      <h1 className="h1 fw600 f-konexy c-secondary mob-mb1">
        Most Recent Questions asked.
       </h1>
    </div>

      
      <Panel
        header="What’s your non-disclosure & IP protection policy? "
        key="1"
      >
        <p className={s.text}>{`Our conversation starts with a mutual non-disclosure agreement. We maintain clients' privacy & confidentiality even when we are discussing a potential engagement. Our engagement letter covers the Intellectual Property & working product rights to clients. Here is the excerpt: "Client owns the product is the in process, finished product, as well as drafts, notes, materials, mockups, hardware, designs, inventions, patents, code, and anything else that the Developer works on—that is, conceives, creates, designs, develops, invents, works on, or reduces to practice—as part of this project"

`}</p>
      </Panel>
      <Panel
        header="What sort of documentation do you need to provide us with estimation?"
        key="2"
      >
        <p className={s.text}>{`Our preferred model of engagement is Sprint-based project development. We often require a high-fidelity mockup, wireframes, or designed screens to provide an accurate estimation. In case, if you do not have the detailed specification - we can help you with discovery, wireframes, resource planning & screen flows.
`}</p>
      </Panel>
      <Panel
        header="We already got backend developer, will you still be intrested ?"
        key="3"
      >
        <p className={s.text}>{`Yes. A good number of clients have their backend in-house & we work on web & mobile front-end engineering technologies. A lot of clients also have their UI/UX in-house or external teams. A few of the programming languages we work on are React, VueJS, AngularJS, Node, NextJS, PHP, and Laravel. For mobile, we work on iOS (Swift, Objective-C), Android (Kotlin, Java), Flutter & React Native languages
       `}</p>
      </Panel>
      <Panel
        header="Will developers join the daily standup meetings? How about video cameras? and Timezone overlapping?"
        key="4"
      >
        <p className={s.text}>{`Yes. Developers will join the scrum meetings on Zoom or Meet. We share a progress note or report on a daily basis on Slack / Google meet. All the developers have video cameras so everyone can meet/ build a comfortable environment. For most of the clients, we have 2 to 3 hours overlapping time in their timezone.
 `}</p>
      </Panel>
      <Panel
        header=" We do not need an entire team, just developer/s. How does that work?"
        key="5"
      >
        <p className={s.text}>{`
Yes, we do work on that model. Often development teams or software agencies have their internal project management, QA/QC, and other systems. Most of our developers have native fluency in the English language. Our developers join on Slack, Jira, or other project management teams. All the developers have video cameras so everyone can meet/ build a comfortable environment. For most of the clients, we have 2 to 3 hours overlapping time in their timezone.
`}</p>
      </Panel>
      <Panel
        header="How soon you can get started? What do you require from us?"
        key="6"
      >
        <p className={s.text}>{`We require 3 to 4 weeks' heads up before we start on any engagement. Oftentimes, we have few developers on the bench, in those cases, we can get started with 1 week's notice. In order to get started, we require our clients to process the project initiation fee invoice.
`}</p>
      </Panel>
      <Panel
        header="How do we pay you? Which currencies do you accept?"
        key="7"
      >
        <p className={s.text}>{`
We have a couple of payment processing options. Bank-based Wire Transfer, local bank account which supports INR, USD, EUR, GBP, AUD & other currencies. We send out routine work logs & monthly invoices for your bookkeeping. We are currently not accepting Crypto Currencies as payment due to local regulations, in the future, we may base it on compliances.
`}</p>
      </Panel>
      <Panel
        header=" How do you ensure the developer working on our product is good & productive?"
        key="8"
      >
        <p className={s.text}>{`All the developers working with us have professional work experience & have completed a thorough training. Our developers are well versed with Git, and SVN version control systems. We undertake various communication, coordination, time management & agile training once a month. Additionally, client teams can have a technical test & interaction before we add developers to the client's team.
`}</p>
      </Panel>
      <Panel
        header=" Which tools you are familiar with? Do you have any strong preferences for the tools?"
        key="9"
      >
        <p className={s.text}>{`We are flexible in using different tools based on our client's preferences. For communications - we use Slack or similar instance communication tools. For version control - we are familiar with GitHub, Bitbucket & GitLab. For project management - we are familiar with Jira, Asana, Trello, & Monday.com. For design & documentation - we use Figma, Sketch, Zeplin, Notion, and Google Docs.
`}</p>
      </Panel>
      <Panel
        header="Do you have a white-label association? How does that work?"
        key="10"
      >
        <p className={s.text}>{`We often have a white-label association with other development & design agencies. Our team represents the respective agency's team members when we communicate/ coordinate with to end client. Often such arrangements are very discreet & we sign a non-compete agreement with the agency.
`}</p>
      </Panel>
      <Panel
        header="Do you extend a discount on a long-term engagement?"
        key="11"
      >
        <p className={s.text}>{`Yes. When clients provide more than 6 months' commitment, we do offer a small concession on the pricing. Often, we focus on the client experience & delivery compared to lure our clients with offers, discounts & promotions.
`}</p>
      </Panel>
      <Panel header="  Do you offer fixed fee contracts?" key="12">
        <p className={s.text}>{`Yes, only when the specifications, user stories, designs & interactions are 100% complete. We price our fixed fee contracts with a good premium compared to sprint-based contracts.



`}</p>
      </Panel>
    </Collapse>
  );
};

export default FAQ;
