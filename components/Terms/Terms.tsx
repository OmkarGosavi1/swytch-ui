import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./Terms.module.scss";

const Terms: FC = () => {
  return (
    <>
      <div className={`${s.container} boxed`}>
        <h1 className={s.heading}>Terms Of Use</h1>
        <div className={s.termsContent}>
          <p>
            {` Please read these website terms of use carefully before using this
            website (hereinafter 'website'). These website terms of use
            (hereinafter 'terms of use') govern your access to and use of the
            website. The website is available for your use only on the condition
            that you agree to the terms of use set forth below. If you do not
            agree to all of the terms of use, do not access or use the website.
            By accessing or using the website, you and the entity you are
            authorised to represent (hereinafter 'you' or 'your') signify your
            agreement to be bound by the terms of use.`}
          </p>
          <h3 className={s.title}>User Eligibility</h3>
          <p>
            {`The Website is provided by Swytch Web3 Technologies Pvt. Ltd. and
            available only to entities and persons who have reached the age of
            legal majority and are competent to enter into a legally binding
            agreement(s) under the applicable law. If you do not qualify, you
            are not permitted to use the website.`}
          </p>
          <h3 className={s.title}>Scope Of Terms Of Use</h3>
          <p>
            {`These Terms of use govern your use of the Website and all
            applications, software and services (collectively known as
            "Services") available via the website, except to the extent that
            such Services are the subject of a separate agreement. Specific
            terms or agreements may apply to the use of certain Services and
            other items provided to you via the website ("Service
            Agreement(s)"). Any such Service Agreements will accompany the
            applicable Services or are listed in association therewith or via a
            hyperlink associated therewith.`}
          </p>
          <h3 className={s.title}>Modifications</h3>
          <p>
            {` Swytch Web3 Technologies Pvt. Ltd. may revise and update these Terms
            of Use at any time. Your continued usage of the website after any
            changes to these Terms of Use will be deemed as acceptance of such
            changes. Any aspect of the website may be changed, supplemented,
            deleted or updated without notice, at the sole discretion of Swytch
            Web3 Technologies Pvt. Ltd.. Swytch Web3 Technologies Pvt. Ltd. may
            also change or impose fees for products and services provided
            through the website at any time, at its sole discretion. Swytch Web3
            Technologies Pvt. Ltd. may establish or change, at any time, general
            practices and restrictions concerning other Swytch Web3 Technologies
            Pvt. Ltd. products and services at its sole discretion.`}
          </p>
          <h3 className={s.title}>
            Swytch Web3 Technologies Pvt. Ltd. Privacy Notice
          </h3>
          <p>
            {`With respect to any individual whose personal information is
            provided by You to Swytch Web3 Technologies Pvt. Ltd., You represent
            to Swytch Web3 Technologies Pvt. Ltd. that You have obtained all
            necessary consents for the processing of such personal information
            contemplated by the Services.`}
          </p>
          <h3 className={s.title}>Licence and Ownership</h3>
          <p>
            {` Any and all intellectual property rights ("Intellectual Property")
            associated with the website and its contents (the "Content") are the
            sole property of Swytch Web3 Technologies Pvt. Ltd., its affiliates
            or third parties. The Content is protected by Intellectual Property
            and other laws both in India and other countries. Elements of the
            website are also protected by trade name, trade secret, unfair
            competition, and other laws and may not be copied or imitated in
            whole or in part. All customised graphics, icons, and other items
            that appear on the website are trademarks, service marks or trade
            name ("Marks") of Swytch Web3 Technologies Pvt. Ltd., its affiliates
            or other entities that have granted Swytch Web3 Technologies Pvt.
            Ltd. the right and licence to use such Marks and may not be used or
            interfered with in any manner without the express written consent of
            Swytch Web3 Technologies Pvt. Ltd.. Except as otherwise expressly
            authorised by these Terms of Use, You may not copy, reproduce,
            modify, amend, lease, loan, sell and/or create derivative works
            from, upload, transmit, and/or distribute the Intellectual Property
            of the website in any way without Swytch Web3 Technologies Pvt.
            Ltd.'s prior written permission or that of an appropriate third
            party. Except as expressly provided herein, Swytch Web3 Technologies
            Pvt. Ltd. does not grant to You any express or implied rights to the
            Intellectual Property of Swytch Web3 Technologies Pvt. Ltd. or that
            of any third party.`}
          </p>
          <p>
            {`Swytch Web3 Technologies Pvt. Ltd. hereby grants You a limited,
            personal, non-transferable, non-sublicensable, revocable licence to
            (a) access and use only the website, Content and Services only in
            the manner presented by Swytch Web3 Technologies Pvt. Ltd., and (b)
            access and use the Swytch Web3 Technologies Pvt. Ltd. computer and
            network services offered within the website (the "Swytch Web3
            Technologies Pvt. Ltd. Systems") only in the manner expressly
            permitted by Swytch Web3 Technologies Pvt. Ltd.. Except for this
            limited licence, Swytch Web3 Technologies Pvt. Ltd. does not convey
            any interest in or to the Swytch Web3 Technologies Pvt. Ltd.
            Systems, information or data available via the Swytch Web3
            Technologies Pvt. Ltd. Systems (the "Information"), Content,
            Services, website or any other Swytch Web3 Technologies Pvt. Ltd.
            property by permitting You to access the website. Except to the
            extent required by law or as expressly provided herein, none of the
            Content and/or Information may be reverse-engineered, modified,
            amended, reproduced, republished, translated into any language or
            computer language, re-transmitted in any form or by any means,
            resold or redistributed without the prior written consent of Swytch
            Web3 Technologies Pvt. Ltd.. You may not make, sell, offer for sale,
            modify, amend, reproduce, display, publicly perform, import,
            distribute, retransmit or otherwise use the Content in any way
            unless expressly permitted to do so by Swytch Web3 Technologies Pvt.
            Ltd..`}
          </p>

          <h3 className={s.title}>Restrictions on Use Of The Website</h3>
          <p>
            {` In addition to other restrictions set forth in these Terms of Use,
            You agree that:`}
          </p>
          <ul>
            <li>
              <p>
                {`You shall not disguise the origin of information transmitted
                through the website.`}
              </p>
            </li>
            <li>
              <p>
                {`You will not place false or misleading information on the
                website.`}
              </p>
            </li>
            <li>
              <p>
                {` You will not use or access any service, information, application
                or software available via the website in a manner not expressly
                permitted by Swytch Web3 Technologies Pvt. Ltd..`}
              </p>
            </li>
            <li>
              <p>
                {` You will not input or upload to the website any information that
                may contain viruses, Trojan horses, worms, time bombs or other
                computer programming routines that are intended to damage,
                interfere with, intercept or expropriate any system, the website
                or Information or that infringes the Intellectual Property
                rights of another.`}
              </p>
            </li>
            <li>
              <p>
                {`Certain areas of the website are restricted to customers of
                Swytch Web3 Technologies Pvt. Ltd..`}
              </p>
            </li>
          </ul>
          <p>
            {`You may not use or access the website or the Swytch Web3
            Technologies Pvt. Ltd. Systems or Services in any way that, in
            Swytch Web3 Technologies Pvt. Ltd.'s judgement, adversely affects
            the performance or function of the Swytch Web3 Technologies Pvt.
            Ltd. Systems, Services or the website or interferes with the ability
            of authorised parties to access the Swytch Web3 Technologies Pvt.
            Ltd. Systems, Services or the website. You may not frame or utilise
            framing techniques to enclose any portion or aspect of the Content
            or the Information, without the express written consent of Swytch
            Web3 Technologies Pvt. Ltd..`}
          </p>
        </div>
      </div>
    </>
  );
};

export default Terms;
