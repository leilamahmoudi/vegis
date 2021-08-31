import React from "react";
import "./privacy.scss";
import PageTemplate from "components/pageTemplate/PageTemplate";
import { ReactComponent as HeaderLogo } from "assets/images/logo/logo.svg";

const Privacy = () => {
  return (
    <div className="Privacy">
      <div className="container">
        <PageTemplate>
          <HeaderLogo className="header-logo" />
          <p>
            This privacy policy gives you an overview of the processing of your
            data at Zalando. It applies to all websites, apps and other services
            and products offered by Zalando. If you have a question regarding
            this privacy policy or the subject of privacy protection at Zalando
            in general, you can contact our data protection team at
            dataskydd@zalando.se at any time . Send an e-mail to our data
            protection team also if you want to exercise your right to
            information or data deletion or other data protection rights
            according to art. 15-22 GDPR, incl. revocation of consent for
            marketing purposes, cancellation of newsletters, etc. Further
            information can be found in the sections What data protection rights
            do I have? and Contacts . How to read this privacy policy : We offer
            you several different opportunities to read this privacy policy. To
            begin with, this section contains some basic information. Then we
            have sorted this privacy policy by relevant topics and divided these
            into individual chapters. Unless you are already a "pro", you can
            jump directly to the individual chapters via the following drop-down
            m
          </p>
        </PageTemplate>
      </div>
    </div>
  );
};
export default Privacy;
