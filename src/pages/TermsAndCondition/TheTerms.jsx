// import { Navbar } from "@material-tailwind/react";
import React from "react";
import TheTerms from "./TheTerms.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const term = () => {
  return (
    <div>
     <Navbar />
      <div className={TheTerms.termContainer}>
      
        <div className={TheTerms.sideBar}>
          <span className={TheTerms.sideBarTitle}>Content</span>
          <ul className={TheTerms.allLinks}>
            <a href="#agreement">The Agreement</a>
            <a href="#Account and Security">Account and Security</a>
            <a href="#License to the Meetup Platform and Services">
              License to the Meetup Platform and Services
            </a>
            <a href="#Content and Privacy">Content and Privacy</a>
            <a href="#Your Feedback to Us">Your Feedback to Us</a>
            <a href="#Platform Safety and Security">
              Platform Safety and Security
            </a>
            <a href="#Third Party Sites and Services">
              Third Party Sites and Services
            </a>
            <a href="#Dispute Resolution">Dispute Resolution</a>
            <a href="#Intellectual Property of Catchup">
              Intellectual Property of Catchup{" "}
            </a>
            <a href="#Termination">Termination</a>
            <a href="#Limitation of Liability">Limitation of Liability</a>
            <a href="#Other Website Links">Other Website Links</a>
            <a href="#Indemnification">Indemnification</a>
            <a href="#Changes to These Terms of Use">
              Changes to These Terms of Use
            </a>
            <a href="#Your data will catch">Your data will catch</a>
            <a href="#Contact Us">Contact Us</a>
          </ul>
        </div>
        <div className={TheTerms.dontDisplay}>
          <span className={TheTerms.termOfUseText}>Terms of Use</span>
          <span span className={TheTerms.textToRead}>
            This document was last updated 15th of December, 2022. To start
            using our product, read this Terms and Conditions thoroughly.
          </span>
        </div>
        <div className={TheTerms.termAndCondition}>
          <div className={TheTerms.flexOrderThree}>
            <div className={TheTerms.TermsOfUse}>
              <span className={TheTerms.termOfUseText}>Terms of Use</span>
              <span span className={TheTerms.textToRead}>
                This document was last updated 15th of December, 2022. To start
                using our product, read this Terms and Conditions thoroughly.
              </span>
            </div>
            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>The Agreement</span>
              <span>
                Catchup enables you to schedule offline, real-world Catchup
                events. The terms “Catchup,” “we,” “us,” and “our” include
                Catchup, Inc. and our corporate parent, affiliates, or
                subsidiaries. We use the terms “you” and “your” to mean any
                person using our Platform, and any organization or person using
                the Platform on an organization’s behalf. We use the word
                “Platform” to mean any website, application, or service offered
                by Catchup, including content we offer and electronic
                communications we send. We provide our Platform to you subject
                to these Terms of Use. We use the terms “Terms of Use” and
                “Agreement” interchangeably to mean this document together with
                our Usage and Content Policies, Groups and Events Policies,
                Organizer and Leadership Standards, Member Restrictions, Payment
                Policies, Trademark Usage Guidelines, and API License Terms.
                Your use of the Platform signifies that you agree to this
                Agreement. If you are using the Platform for an organization,
                you agree to this Agreement on behalf of that organization, and
                represent you have authority to bind that organization to the
                terms contained in this Agreement. If you do not or are unable
                to agree to this Agreement, do not use our Platform. Trademark
                Usage Guidelines, and API License Terms. Your use of the
                Platform signifies that you agree to this Agreement. If you are
                using the Platform for an organization, you agree to this
                Agreement on behalf of that organization, and represent you have
                authority to bind that organization to the terms contained in
                this Agreement. If you do not or are unable to agree to this
                Agreement, do not use our Platform.
              </span>
            </div>

            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>Account and Security</span>
              <span>
                When you register, you provide us with some basic information,
                including an email address and a password. Keep your email
                address and other account information current and accurate.
                Also, you agree to maintain the security and confidentiality of
                your password (or else we may need to disable your account). We
                strongly encourage you to choose a strong and unique password
                that is not shared with any other account or online service and
                practice other healthy password security habits to help avoid
                unauthorized access to your account. You alone are responsible
                for anything that happens from your failure to maintain that
                security and confidentiality, such as by sharing your account
                credentials with others. If someone is using your password or
                accessing your account without your permission, email us at
                <span className={TheTerms.catchUpEmail}>
                  {" "}
                  catchup@gmail.com
                </span>
              </span>
            </div>

            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>
                License to the Meetup Platform and Services
              </span>
              <span>
                Subject to your compliance with this Agreement, Catchup grants
                you an unlimited, non-exclusive, revocable, non-sublicensable,
                non-transferable right to use the Platform in order to access
                and use the services and features that we make available to you.
              </span>
            </div>

            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>Content and Privacy</span>
              <span>
                Our Service allows You to post Content. You are responsible for
                the Content that You post to the Service, including its
                legality, reliability, and appropriateness. By posting Content
                to the Service, You grant Us the right and license to use,
                modify, publicly perform, publicly display, reproduce, and
                distribute such Content on and through the Service. You retain
                any and all of Your rights to any Content You submit, post or
                display on or through the Service and You are responsible for
                protecting those rights. You agree that this license includes
                the right for Us to make Your Content available to other users
                of the Service, who may also use Your Content subject to these
                Terms. You represent and warrant that: (i) the Content is Yours
                (You own it) or You have the right to use it and grant Us the
                rights and license as provided in these Terms, and (ii) the
                posting of Your Content on or through the Service does not
                violate the privacy rights, publicity rights, copyrights,
                contract rights or any other rights of any person. We do not
                claim ownership of your Content. However, to enable us to
                operate, improve, promote, and protect Meetup and our Platform,
                and to ensure we do not violate any rights you may have in your
                Content, you hereby grant Catch-up a non-exclusive, worldwide,
                perpetual, irrevocable, royalty-free, sub-licensable,
                transferable right and license (including a waiver of any moral
                rights) to use, host, store, reproduce, modify, publish,
                publicly display, publicly perform, distribute, and create
                derivative works of, your Content and to commercialize and
                exploit the copyright, trademark, publicity, and database rights
                you have in your Content. This license would permit your Content
                to remain on the Platform, even after you cease to be a member
                of a Catchup group or of the Platform.
              </span>
            </div>

            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>Privacy</span>
              <span>
                Catchup collects registration and other information about you
                through our Platform. Please refer to our Privacy Policy and
                Cookie Policy for details on how we collect, use, and disclose
                this information. These policies do not govern use of
                information that you provide to third parties, such as to
                organizers and other members of Catchup’s Platform. Tip: Meetup
                has no control over how other members may use information that
                you provide to them, so you should exercise common sense and
                good judgment when sharing information with others on our
                Platform.
              </span>
            </div>

            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>Content of Others:</span>
              <span>
                Catchup does not control the Content of other members. When we
                become aware of inappropriate Content on our Platform, we
                reserve the right to investigate and take appropriate action,
                but we do not have any obligation to monitor, nor do we take
                responsibility for, the Content of other members. 5.3
                Interactions with Others. Meetup is not a party to any offline
                arrangements made through our Platform. Meetup does not conduct
                or require background checks on members and does not attempt to
                verify the truth or accuracy of statements made by members.
                Catchup makes no representations or warranties concerning the
                conduct or Content of any members or their interactions with
                you.
              </span>
            </div>

            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>Your Feedback to Us</span>
              <span>
                You assign all rights, title and interest in any Feedback You
                provide the Company. If for any reason such assignment is
                ineffective, You agree to grant the Company a non-exclusive,
                perpetual, irrevocable, royalty free, worldwide right and
                license to use, reproduce, disclose, sub-license, distribute,
                modify and exploit such Feedback without restriction.
              </span>
            </div>

            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>
                Platform Safety and Security
              </span>
              <span>
                You agree that you will not, either directly or indirectly
                Extract data from the Platform for a commercial purpose not
                permitted by these Terms of Use, whether through use of an
                automated system or software, and whether operated by a third
                party or otherwise (“screen scraping,” “data scraping,” or “web
                scraping”). Engage in any activity that interferes with or
                disrupts, that is designed to interfere with or disrupt, or
                imposes undue burdens on the Platform or its systems. You agree
                to use, retain, and otherwise process personal data collected
                from the Platform in accordance with applicable laws, rules, and
                regulations and solely for purposes of administering and
                participating in Catchup events. Without limitation, you agree
                to provide notice to individuals about your processing of their
                personal data, to obtain any necessary consents, and to respond
                to requests made by individuals as required by applicable law.
                You also agree to safeguard such data from unauthorized access
                or processing. You must delete such personal data once it is no
                longer strictly necessary for the administration of a Catchup
                event or promptly following a request from Catchup, and you will
                promptly certify to such deletion.
              </span>
            </div>

            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>
                Platform Modifications:
              </span>
              <span>
                We work hard to continuously improve our Platform. This means
                that we may modify or discontinue portions or all of our
                Platform with or without notice and without liability to you or
                any third party.
              </span>
            </div>
            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>
                Third Party Sites and Services
              </span>
              <span>
                The Platform contains links to third party sites, and is
                integrated with various third party services, applications and
                sites that may make available to you their content and products.
                We don’t control these third parties and aren’t responsible for
                those sites or services or their content or products. These
                third parties may have their own terms and policies, and your
                use of them will be governed by those terms and policies. You do
                not have a license to use the intellectual property of third
                parties merely by way of your access to our Platform.
              </span>
            </div>

            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>Dispute Resolution</span>
              <span>
                We shall only process your Data following principles of data
                protection and if there is a legal basis to do so. If in
                furtherance of the establishment or implementation of our
                contract, it shall serve as the legal basis. Otherwise, we have
                an interest in continuously improving our Offers, adjusting our
                Offers in line with your needs, and showing you advertising that
                may be of interest to you. This is necessary to develop our
                Offers further, as well as to be able to finance and guarantee
                the security of our Offers. We act on the presumption that our
                interests are predominant. If you have consented to data
                Processing, this consent will apply.
              </span>
            </div>

            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>Legal Basis</span>
              <span>
                We shall only process your Data following principles of data
                protection and if there is a legal basis to do so. If in
                furtherance of the establishment or implementation of our
                contract, it shall serve as the legal basis. Otherwise, we have
                an interest in continuously improving our Offers, adjusting our
                Offers in line with your needs, and showing you advertising that
                may be of interest to you. This is necessary to develop our
                Offers further, as well as to be able to finance and guarantee
                the security of our Offers. We act on the presumption that our
                interests are predominant. If you have consented to data
                Processing, this consent will apply
              </span>
            </div>

            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>
                Intellectual Property of Catchup
              </span>
              <span>
                The Service is and will continue to be the sole property of the
                Company and its licensors, including all of its original content
                (aside from Content that is supplied by You or other users),
                features, and functionality. The copyright, trademark, and other
                laws of the country as well as other nations provide protection
                for the Service. Without the previous written approval of the
                Company, use of our trademarks and trade dress in connection
                with any good or service is strictly prohibited.
              </span>
            </div>

            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>
                Intellectual Property of Others:
              </span>
              <span>
                Catchup respects the intellectual property of others, and we
                expect our members to do the same. We may, in appropriate
                circumstances and in our discretion, remove or disable access to
                material that we believe may infringe on the intellectual
                property rights of others. We may also restrict or terminate
                access to our Platform to those who we believe to be repeat
                infringers. If you believe your intellectual property rights
                have been violated, please review our Intellectual Property
                Dispute Policies.
              </span>
            </div>

            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>
                Limitation of Liability
              </span>
              <span>
                Notwithstanding any damages that You might incur, the entire
                liability of the Company and any of its suppliers under any
                provision of this Terms and Your exclusive remedy for all of the
                foregoing shall be limited to the amount actually paid by You
                through the Service or 100 USD if You haven't purchased anything
                through the Service. To the maximum extent permitted by
                applicable law, in no event shall the Company or its suppliers
                be liable for any special, incidental, indirect, or
                consequential damages whatsoever (including, but not limited to,
                damages for loss of profits, loss of data or other information,
                for business interruption, for personal injury, loss of privacy
                arising out of or in any way related to the use of or inability
                to use the Service, third-party software and/or third-party
                hardware used with the Service, or otherwise in connection with
                any provision of this Terms), even if the Company or any
                supplier has been advised of the possibility of such damages and
                even if the remedy fails of its essential purpose. Some states
                do not allow the exclusion of implied warranties or limitation
                of liability for incidental or consequential damages, which
                means that some of the above limitations may not apply. In these
                states, each party's liability will be limited to the greatest
                extent permitted by law.
              </span>
            </div>

            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>Other Website Links</span>
              <span>
                Links to third-party websites or services that are not within
                the Company's control or ownership may be found on our service.
                The Company has no control over, and accepts no liability for,
                any third-party web sites or services' content, privacy
                policies, or practices. You further acknowledge and agree that
                the Company shall not be responsible or liable, directly or
                indirectly, for any injury or damage of any kind resulting from
                use of or reliance on any such content, goods, or services made
                available on or through any such web sites or services, whether
                such injury or damage is foreseeable or arises from a negligent
                act or omission on the part of the Company. We firmly encourage
                that before using any third-party websites or services, you read
                their terms of service and privacy policies.
              </span>
            </div>

            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>Indemnification</span>
              <span>
                ou agree to hold all Catchup Parties harmless from any Claims
                made by any third party due to or arising out of (a) your
                violations of this Agreement, (b) your use, misuse, or abuse of
                our Platform, (c) your Content, (d) your violation of any law,
                statute, ordinance, or regulation or the rights of a third
                party, or (e) your participation or conduct in a Catchup group
                or a Catchup event that violates this Agreement, to the fullest
                extent permitted by applicable You agree to cooperate with the
                Catchup Parties in defending against any claims made by third
                parties, promptly notify us of any such claims, and pay all
                fees, costs, and expenses (including, but not limited to, legal
                fees) incurred in doing so.
              </span>
            </div>

            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>
                Changes to These Terms of Use
              </span>
              <span>
                We reserve the right, at Our sole discretion, to modify or
                replace these Terms at any time. If a revision is material We
                will make reasonable efforts to provide at least 30 days' notice
                prior to any new terms taking effect. What constitutes a
                material change will be determined at Our sole discretion. By
                continuing to access or use Our Service after those revisions
                become effective, You agree to be bound by the revised terms. If
                You do not agree to the new terms, in whole or in part, please
                stop using the website and the Service.
              </span>
            </div>

            <div className={TheTerms.textToReadContainer}>
              <span className={TheTerms.textTitles}>
                Changes to These Terms of Use
              </span>
              <span>
                If you have any questions about these Terms of Use, You can
                contact us: By visiting this page on our website at{" "}
                <a href="#catchup">
                  <span className={TheTerms.catchUpEmail}>
                    {" "}
                    www.catchup.com/contactus/{" "}
                  </span>
                </a>
                by sending us an email at{" "}
                <a href="www.gmail.com">
                  <span className={TheTerms.catchUpEmail}>
                    {" "}
                    catchup@gmail.com
                  </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default term;
