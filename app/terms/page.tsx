import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Chariot',
}

export default function TermsPage() {
  return (
    <div className="terms-shell">
      <header className="terms-header">
        <Link href="/" className="terms-wordmark">Chariot</Link>
      </header>

      <main className="terms-body">
        <div className="terms-inner">
          <div className="terms-masthead">
            <p className="terms-eyebrow">Legal</p>
            <h1 className="terms-title">Terms &amp; Conditions</h1>
            <p className="terms-meta">Chariot Archive — effective May 2025</p>
          </div>

          <section className="terms-section">
            <h2 className="terms-heading">1. What Chariot is</h2>
            <p>Chariot Archive is a cross-border fashion import platform that sources and ships pieces from Africa-based designers to customers in the US and abroad. By creating an account or placing an order you agree to these terms in full.</p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">2. Drop model and product availability</h2>
            <p>Chariot operates in limited, time-bound drops. Drops open at a scheduled time and close when inventory is exhausted or the window expires — whichever comes first.</p>
            <ul className="terms-list">
              <li>Adding an item to your cart does not reserve it. Only a completed, paid order confirms your purchase.</li>
              <li>We make no guarantee that any item will be available when you attempt to check out, even if it was available moments before.</li>
              <li>Product images and descriptions reflect the item at time of listing. Minor variations in color and texture are inherent to handcrafted goods and do not constitute a defect.</li>
              <li>All sales are final. Refunds are issued only for items lost in transit or damaged on arrival — contact us within 7 days of the delivery date.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">3. Membership credits</h2>
            <p>Chariot accounts include a credit balance applied as a discount at checkout. Credits are issued under the following rules:</p>
            <ul className="terms-list">
              <li><strong>Starting credit:</strong> $30 is added to your account upon completion of your first purchase.</li>
              <li>Credits have no cash value and cannot be withdrawn or transferred.</li>
              <li>Credits expire if your account is terminated or if Chariot discontinues the credit program with 30 days notice.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">4. Referral program</h2>
            <p>You may share your referral link to earn additional credits. The program works as follows:</p>
            <ul className="terms-list">
              <li>You earn <strong>$5 in credit</strong> for each friend who creates an account using your referral link and completes their first purchase.</li>
              <li>Referral credits are capped at <strong>3 referrals</strong> ($15 total) per account.</li>
              <li>Referral credit is issued after the referred customer's payment clears — not at signup.</li>
              <li>Referral links are valid only when accessed through chariot.com. Third-party reposts or coupon aggregator sites do not qualify.</li>
              <li>Self-referrals and duplicate accounts are prohibited. Chariot may claw back credits and terminate accounts found to be abusing the referral system.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">5. Promo codes</h2>
            <ul className="terms-list">
              <li>Promo codes are single-use per account unless otherwise stated.</li>
              <li>Codes have a maximum redemption count set at time of issuance. Once that limit is reached the code is void, regardless of whether you received it before the cutoff.</li>
              <li>Chariot reserves the right to expire or revoke any promo code at any time.</li>
              <li>Codes applied to an order cannot be reinstated after checkout is complete.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">6. Payments</h2>
            <p>All transactions are processed by Stripe. By placing an order you agree to Stripe's terms of service in addition to these terms. Chariot does not store card details. Prices are listed in USD and include any applicable fees. Import duties and local taxes are your responsibility unless explicitly stated otherwise at checkout.</p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">7. Account termination</h2>
            <p>You may close your account at any time by contacting us at <a href="mailto:hello@chariotarchive.com">hello@chariotarchive.com</a>. On closure, any unused credits are forfeited.</p>
            <p>Chariot may suspend or terminate your account if you:</p>
            <ul className="terms-list">
              <li>Violate these terms or attempt to abuse credits, referrals, or promo codes</li>
              <li>Engage in fraudulent or chargeback activity</li>
              <li>Provide false information during signup or checkout</li>
            </ul>
            <p>Termination does not affect any orders already shipped or in transit.</p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">8. Data use and privacy</h2>
            <p>When you create an account or place an order, we collect your email address, shipping information, and purchase history. This information is used to:</p>
            <ul className="terms-list">
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations, shipping updates, and drop announcements</li>
              <li>Manage your credit balance and referral status</li>
            </ul>
            <p>We do not sell your personal information to third parties. We share data with Stripe (payment processing), Supabase (database infrastructure), and Resend (transactional email) solely to operate the platform. These providers are contractually bound to handle your data securely.</p>
            <p>You may request deletion of your account data by emailing <a href="mailto:hello@chariotarchive.com">hello@chariotarchive.com</a>. We will process deletion requests within 30 days, except where retention is required by law.</p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">9. Changes to these terms</h2>
            <p>We may update these terms as the platform evolves. Material changes will be communicated by email to the address on your account. Continued use of Chariot after the effective date of any update constitutes acceptance of the revised terms.</p>
          </section>

          <section className="terms-section">
            <h2 className="terms-heading">10. Contact</h2>
            <p>Questions about these terms or your account: <a href="mailto:hello@chariotarchive.com">hello@chariotarchive.com</a></p>
          </section>
        </div>
      </main>
    </div>
  )
}
