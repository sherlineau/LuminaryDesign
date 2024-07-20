import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="container policies">
      <h1>Terms of Use</h1>
      <div className="container-sm">
        <p>Effective Date: July 20, 2024 </p>
        <p>
          Welcome to Luminary Designs! These Terms of Use (&quot;Terms&quot;)
          govern your access to and use of our website, products, and services
          provided by Luminary Designs (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;). By accessing or using our website or services, you
          agree to be bound by these Terms. Please read them carefully before
          using our services.
        </p>

        <h2>1. Use of Our Services</h2>
        <ol>
          <li>
            <span className="bold">License:</span> Subject to these Terms, we
            grant you a limited, non-exclusive, non-transferable license to use
            our website and services for your personal or business use.
          </li>
          <li>
            <span className="bold">Restrictions:</span>You agree not to:
            <ul>
              <li>
                Use our services for any illegal purpose or in violation of any
                local, state, national, or international law.
              </li>
              <li>
                Modify, adapt, translate, reverse engineer, decompile,
                disassemble, or create derivative works based on our website or
                services.
              </li>
              <li>
                Copy, distribute, transmit, display, perform, or reproduce any
                content on our website, except as permitted by these Terms.
              </li>
            </ul>
          </li>
        </ol>

        <h2>2. Intellectual Property</h2>
        <ol>
          <li>
            <span className="bold">Ownership:</span> All content and materials
            available on our website, including text, graphics, logos, images,
            software, and other materials, are owned by or licensed to Luminary
            Designs and are protected by copyright, trademark, and other
            intellectual property laws.
          </li>
          <li>
            <span className="bold">Trademarks:</span> The trademarks, service
            marks, and logos used and displayed on our website are registered
            and unregistered trademarks of Luminary Designs. You agree not to
            use these trademarks without our prior written permission.
          </li>
        </ol>

        <h2>3. User Content</h2>
        <ol>
          <li>
            <span className="bold">Submission: </span>You may submit content to
            us, such as text, images, or other materials (&quot;User
            Content&quot;), through our website or services. By submitting User
            Content, you grant us a non-exclusive, royalty-free, perpetual,
            irrevocable, and fully sublicensable right to use, reproduce,
            modify, adapt, publish, translate, create derivative works from,
            distribute, and display such User Content worldwide.
          </li>
          <li>
            <span className="bold">Responsibility: </span>You are solely
            responsible for your User Content and the consequences of posting or
            publishing it. You represent and warrant that you own or have the
            necessary licenses, rights, consents, and permissions to use and
            authorize us to use all patent, trademark, trade secret, copyright,
            or other proprietary rights in and to any and all User Content.
          </li>
        </ol>

        <h2>4. Privacy</h2>
        <p>
          Our collection and use of your personal information are governed by
          our Privacy Policy, which is incorporated into these Terms by
          reference. Please review our{" "}
          <Link to="/privacy-policy">Privacy Policy</Link> for more information.
        </p>

        <h2>5. Disclaimer of Warranties</h2>
        <ol>
          <li>
            <span className="bold">As Is:</span>Our website and services are
            provided on an &quot;as is&quot; and &quot;as available&quot; basis.
            We make no warranties or representations about the accuracy,
            completeness, or reliability of any content available on or through
            our website or services.
          </li>
          <li>
            <span className="bold">Use at Your Own Risk:</span>You use our
            website and services at your own risk. We disclaim all warranties,
            whether express, implied, statutory, or otherwise, including but not
            limited to warranties of merchantability, fitness for a particular
            purpose, and non-infringement.
          </li>
        </ol>

        <h2>6. Limitation of Liability</h2>
        <ol>
          <li>
            <span className="bold">Exclusion:</span>In no event shall Luminary
            Designs be liable to you or any third party for any indirect,
            consequential, exemplary, incidental, special, or punitive damages,
            including lost profit damages arising from or in connection with
            your use of our website or services, even if we have been advised of
            the possibility of such damages.
          </li>
          <li>
            <span className="bold">Total Liability:</span>Our total liability to
            you for all claims arising out of or relating to these Terms or your
            use of our website or services shall not exceed the amount paid by
            you, if any, for accessing our services during the twelve (12)
            months preceding the date of your claim.
          </li>
        </ol>

        <h2>7. Indemnifcation</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Luminary Designs and
          its officers, directors, employees, agents, and affiliates from and
          against any and all claims, damages, obligations, losses, liabilities,
          costs, or debt, and expenses (including but not limited to
          attorney&apos;s fees) arising from:
        </p>
        <ul>
          <li>Your use of and access to our website and services.</li>
          <li>Your violation of these Terms</li>
          <li>
            Your violation of any third-party right, including wihtout
            limitation any copyright, property, or privacy right.
          </li>
        </ul>

        <h2>8. Governing Law and Dispute Resolution</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of Lousiana, USA, without regard to its conflict of law
          principles. Any dispute arising from or relating to these Terms or
          your use of our website or services shall be exclusively resolved in
          the state or federal courts located in Baton Rouge, Lousiana, USA.
        </p>

        <h2>9. Changes to These Terms</h2>
        We may update these Terms from time to time. We will notify you of any changes by posting the updated Terms on our website with an updated effective date. Your continued use of our website or services after the posting of the updated Terms constitutes your acceptance of the changes.

        <p className="bold">Last updated: July 20, 2024</p>
      </div>
    </div>
  );
};

export default index;
