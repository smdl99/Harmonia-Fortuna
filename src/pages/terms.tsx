import React from 'react';
import RootLayout from '../components/root-layout';
import PageHeader from '../components/page-header';
import SEO from '../components/seo';

export default function TermsPage() {
  return (
    <RootLayout>
      <PageHeader title="Terms of Service" backHref="/menu" />

      <div className="text">
        <p>
          By accessing this website, you agree to the following terms and
          conditions. If you do not agree, you must immediately cease use of
          this site.
        </p>
        <h2>1. Institutional Investors Only</h2>
        <p>
          This website is intended solely for institutional investors,
          professional investors, qualified purchasers, accredited investors, or
          other persons permitted under applicable law.
        </p>
        <p>
          This website is not intended for retail investors or members of the
          general public.
        </p>
        <p>
          By accessing this website, you represent and warrant that you qualify
          as an eligible investor under the laws applicable in your jurisdiction
          and that you are legally permitted to access materials relating to
          alternative investment strategies.
        </p>
        <h2>2. Jurisdictional Restrictions</h2>
        <p>
          The information contained on this website is not directed at, and may
          not be accessed by, any person in any jurisdiction where:
        </p>
        <ul>
          <li>Such access would be unlawful</li>
          <li>The offering of alternative investment products is restricted</li>
          <li>Registration, filing, or authorization would be required</li>
        </ul>
        <p>
          You are responsible for ensuring that your access to this website is
          lawful under the laws of your country of residence.
        </p>
        <p>
          If you are located in a jurisdiction where access is prohibited, you
          must exit immediately.
        </p>
        <h2>3. No Offer or Solicitation</h2>
        <p>Nothing on this website constitutes:</p>
        <ul>
          <li>An offer to sell securities</li>
          <li>A solicitation of an offer to buy securities</li>
          <li>A public offering</li>
          <li>Investment advice</li>
          <li>Financial advice</li>
          <li>Legal advice</li>
          <li>Tax advice</li>
        </ul>
        <p>
          Any offering of interests in investment vehicles managed by the firm
          will be made solely through definitive offering documents, private
          placement memoranda, and subscription agreements.
        </p>
        <h2>4. No Advisory Relationship</h2>
        <p>Access to this website does not create:</p>
        <ul>
          <li>An investment advisory relationship</li>
          <li>A fiduciary relationship</li>
          <li>A client relationship</li>
        </ul>
        <p>The information presented is for informational purposes only.</p>
        <p>
          You should consult your own independent legal, tax, accounting, and
          financial advisors before making any investment decision.
        </p>
        <h2>5. Risk Disclosure</h2>
        <p>
          Investments in alternative assets involve significant risks, including
          but not limited to:
        </p>
        <ul>
          <li>Loss of capital</li>
          <li>Illiquidity</li>
          <li>Leverage risk</li>
          <li>Market volatility</li>
          <li>Regulatory risk</li>
          <li>Counterparty risk</li>
        </ul>
        <p>
          There can be no assurance that investment objectives will be achieved.
        </p>
        <p>Past performance is not indicative of future results.</p>
        <p>You may lose all or substantially all of your invested capital.</p>
        <h2>6. No Warranty</h2>
        <p>
          The information provided on this website is presented "as is" and
          without warranties of any kind, either express or implied.
        </p>
        <p>The firm does not warrant:</p>
        <ul>
          <li>Accuracy</li>
          <li>Completeness</li>
          <li>Timeliness</li>
          <li>Reliability</li>
        </ul>
        <p>Information may be changed or updated without notice.</p>
        <h2>7. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, the firm and its affiliates
          shall not be liable for:
        </p>
        <ul>
          <li>Any direct losses</li>
          <li>Any indirect losses</li>
          <li>Any incidental or consequential losses</li>
          <li>Any investment losses</li>
          <li>Any reliance placed on information contained on this website</li>
        </ul>
        <p>You assume full responsibility for any investment decisions made.</p>
        <h2>8. Forward-Looking Statements</h2>
        <p>This website may contain forward-looking statements.</p>
        <p>
          Such statements are inherently uncertain and subject to risks and
          assumptions.
        </p>
        <p>Actual results may differ materially.</p>
        <h2>9. Confidentiality</h2>
        <p>
          The information contained on this website may be confidential and
          intended only for eligible investors.
        </p>
        <p>
          Unauthorized distribution, reproduction, or dissemination is strictly
          prohibited.
        </p>
        <h2>10. Modifications</h2>
        <p>
          These Terms of Service may be amended at any time without prior
          notice.
        </p>
        <p>
          Continued use of the website constitutes acceptance of the revised
          terms.
        </p>
        <h2>11. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the applicable governing jurisdiction of the firm.
        </p>
      </div>
    </RootLayout>
  );
}

export const Head = () => (
  <SEO
    title="Terms | Harmonia Fortuna"
    description="Legal framework and disclosures relating to Harmonia Fortuna. Transparency and structural integrity guide our standards."
  />
);
