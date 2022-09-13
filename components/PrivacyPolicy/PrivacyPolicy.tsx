import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./PrivacyPolicy.module.scss";

const PrivacyPolicy: FC = () => {
  return (
    <>
      <div className={`${s.container} boxed`}>
        <h1 className={s.heading}>PRIVACY POLICY</h1>
        <div className={s.privacyContent}>
          <p>
           {` This Privacy Policy governs the manner in which Swytch Web3
            Technologies Pvt. Ltd. collects, uses, maintains and discloses
            information collected from users (each, a "User") of the
            www.swytch.in website ("Site"). This privacy policy applies to the
            Site and all products and services offered by Swytch Web3
            Technologies Pvt. Ltd..`}
          </p>
          <h3 className={s.title}>Personal identification information</h3>
          <p>
            {`We may collect personal identification information from Users in a
            variety of ways, including, but not limited to, when Users visit our
            site, register on the site, place an order, subscribe to the
            newsletter, fill out a form, and in connection with other
            activities, services, features or resources we make available on our
            Site. Users may be asked for, as appropriate, name, email address,
            mailing address, phone number, credit card information. Users may,
            however, visit our Site anonymously. We will collect personal
            identification information from Users only if they voluntarily
            submit such information to us. Users can always refuse to supply
            personally identification information, except that it may prevent
            them from engaging in certain Site related activities`}

          </p>
          <h3 className={s.title}>Non-personal identification information</h3>
          <p>
            {`We may collect non-personal identification information about Users
            whenever they interact with our Site. Non-personal identification
            information may include the browser name, the type of computer and
            technical information about Users means of connection to our Site,
            such as the operating system and the Internet service providers
            utilised and other similar information.`}
          </p>
          <h3 className={s.title}>Web browser cookies</h3>
          <p>
           {` Our Site may use "cookies" to enhance User experience. User's web
            browser places cookies on their hard drive for record-keeping
            purposes and sometimes to track information about them. Users may
            choose to set their web browser to refuse cookies, or to alert you
            when cookies are being sent. If they do so, note that some parts of
            the Site may not function properly.`}
          </p>
          <h3 className={s.title}>How we use collected information</h3>
          <p>
            {`Swytch Web3 Technologies Pvt. Ltd. may collect and use Users
            personal information for the following purposes:`}
          </p>
          <ul className={s.privacyInfo}>
            <li>
              <p>To improve customer service-</p>
              <p>
                {`Information you provide helps us respond to your customer
                service requests and support needs more efficiently.`}
              </p>
            </li>
            <li>
              <p>To personalise user experience-</p>
              <p>
                {`We may use information in the aggregate to understand how our
                users as a group use the services and resources provided on our
                site.`}
              </p>
            </li>
            <li>
              <p>To improve our site-</p>
              <p>
                {`We may use feedback you provide to improve our products and
                services.`}
              </p>
            </li>
            <li>
              <p>To process payments-</p>
              <p>
                {`We may use the information Users provide about themselves when
                placing an order only to provide service to that order. We do
                not share this information with outside parties except to the
                extent necessary to provide the service.`}
              </p>
            </li>
            <li>
              <p>To run a promotion, contest, survey or other site feature-</p>
              <p>
                {`To send Users information they agreed to receive about topics we
                think will be of interest to them.`}
              </p>
            </li>
            <li>
              <p> To send periodic emails-</p>
              <p>
                {`We may use the email address to send user information and
                updates pertaining to their order. It may also be used to
                respond to their inquiries, questions, and/or other requests. If
                a user decides to opt-in to our mailing list, they will receive
                emails that may include company news, updates, related product
                or service information, etc. If at any time the user would like
                to unsubscribe from receiving future emails, they may do so by
                contacting us via our site.`}
              </p>
            </li>
          </ul>
          <h3 className={s.title}>How we protect your information</h3>
          <p>{`We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorised access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our site. `}</p>
          <p>{`Sensitive and private data exchange between the Site and its users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.`}</p>
          <h3 className={s.title}>Sharing your personal information</h3>
          <p>We do not sell, trade, or rent users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.</p>
          <h3 className={s.title}>Changes to this privacy policy</h3>
          <p>{`Swytch Web3 Technologies Pvt. Ltd. has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.`}</p>
          <h3 className={s.title}>Your acceptance of these terms</h3>
          <p>{`By using this site, you signify your acceptance of this policy and terms of service. If you do not agree to this policy, please do not use our site. Your continued use of the site following the posting of changes to this policy will be deemed your acceptance of those changes.`}
          </p>
          <p>Contact us</p>
          <p>{`If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:`}</p>
          <p className={s.contact}><strong>(+91) 7506427320</strong></p>
          <p className={s.toMail}><strong>
            <a href= "mailto: info@swytch.in">info@swytch.in</a></strong></p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
