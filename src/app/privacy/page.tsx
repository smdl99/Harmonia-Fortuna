import RootLayout from '@/components/root-layout';
import PageHeader from '@/components/page-header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy | Harmonia Fortuna',
  description:
    'Harmonia Fortuna treats personal and institutional information with strict confidentiality and care.',
};

export default function PrivacyPage() {
  return (
    <RootLayout>
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: 26.02.2026"
        backHref="/menu"
      />

      <div className="prose">
        <h2>1. Overview of Data Protection</h2>
        <p>
          The following information provides an overview of what happens with
          your personal data when you visit this website. &apos;Personal
          data&apos; refers to all data that can be used to personally identify
          you. For detailed information, please consult our Data Protection
          Declaration below.
        </p>

        <h3>Data Recording on This Website</h3>
        <p>
          <strong>Controller:</strong> The data on this website is processed by
          the operator of the website, whose contact information is available
          under the section &quot;Information Required by Law.&quot;
        </p>
        <p>
          <strong>How we record your data:</strong> We collect data that you
          share with us (e.g., via contact forms). Other data is recorded
          automatically by our IT systems, such as technical information
          (browser, operating system, time of access).
        </p>
        <p>
          <strong>Purpose of processing:</strong> To ensure website
          functionality and analyze user patterns.
        </p>

        <h3>Your Rights</h3>
        <ul>
          <li>Access information about your archived personal data</li>
          <li>Rectification or deletion of your data</li>
          <li>Revoke consent to data processing at any time</li>
          <li>Request processing restrictions in certain cases</li>
          <li>Lodge a complaint with the supervisory authority</li>
        </ul>

        <h2>2. General Information</h2>
        <p>
          The operators of this website treat personal data confidentially and
          in accordance with statutory data protection regulations.
        </p>
        <p>
          <strong>Controller:</strong> HF Management LTD
          <br />
          Suite C, Level 7, World Trust Tower, 50 Stanley Street, Central, Hong
          Kong
          <br />
          Email: info@hf8.ch
        </p>

        <h3>Storage Duration</h3>
        <p>
          Personal data will remain until the purpose of collection no longer
          applies, or until you request deletion or revoke consent, subject to
          legal retention obligations.
        </p>

        <h3>Data Transfer to the USA</h3>
        <p>
          Certain tools may transfer your personal information to US servers.
          The USA is not considered a safe third country under EU law. We have
          no control over processing by US authorities.
        </p>

        <h3>Revocation and Objection</h3>
        <p>
          You may revoke consent or object to data processing under GDPR Art. 21
          at any time. This includes objection to direct marketing and
          profiling.
        </p>

        <h2>3. Data Recording</h2>

        <h3>Cookies</h3>
        <p>
          We use cookies to ensure website functionality, analyze user behavior,
          and display personalized content. You may manage cookies through
          browser settings.
        </p>

        <h3>Server Log Files</h3>
        <p>
          Server logs collect browser type, operating system, referrer URL,
          hostname, access time, and IP address. Data is recorded for
          optimization and technical purposes.
        </p>

        <h3>Contact Forms & Requests</h3>
        <p>
          Data you provide via forms, email, or phone will be stored to process
          inquiries. We will not share this information without your consent.
        </p>

        <h3>Registration</h3>
        <p>
          If you register, we use your data to provide the service. Required
          information must be entered in full. Data is stored while registered
          and deleted afterward, subject to legal obligations.
        </p>

        <h2>5. Services Used on the Website</h2>
        <p>
          We use analytics, advertising, and security tools such as Google
          Analytics, Google Ads, Facebook Pixel, Google reCaptcha v3, and Zoom.
          These may process personal data and transfer it to the USA under
          Standard Contractual Clauses (SCC).
        </p>

        <h2>6. Newsletter</h2>
        <p>
          To subscribe, we require your email and verification. Data is used
          only for sending the newsletter and can be unsubscribed at any time.
          Email addresses may be stored in a blacklist to prevent future
          mailings.
        </p>

        <h2>7. Online Audio & Video Conferences</h2>
        <p>
          We use conference tools (e.g., Zoom) for communication. Personal data
          includes emails, phone numbers, metadata, and any content shared. We
          do not control all data processing by the provider. Data is stored
          until deletion is requested.
        </p>

        <h2>8. Your Rights Under GDPR</h2>
        <ul>
          <li>Access and rectify your data</li>
          <li>Request erasure</li>
          <li>Restrict processing</li>
          <li>Data portability</li>
          <li>Object to processing</li>
          <li>Withdraw consent at any time</li>
          <li>Lodge a complaint with local authorities</li>
        </ul>

        <h2>9. Security Measures</h2>
        <ul>
          <li>SSL/TLS encryption</li>
          <li>Access control restrictions</li>
          <li>Encrypted storage systems</li>
          <li>Secure communication channels</li>
          <li>Data minimization principles</li>
        </ul>

        <h2>10. Updates to This Policy</h2>
        <p>
          This Privacy Policy may be updated periodically. The current version
          is always available on our website.
        </p>
      </div>
    </RootLayout>
  );
}
