import React from 'react';

export const metadata = {
  title: 'Privacy Policy - Jeremy Lesniewski',
  description: 'Privacy policy for Jeremy Lesniewski website and services',
};

export default function PrivacyPage() {
  return (
    <main className="overflow-hidden">
      <section className="section-padding border-t border-neutral-800 pt-32">
        <div className="container-max max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-neutral-400 leading-relaxed">
                Jeremy Lesniewski ("we", "us", "our") operates the neecratch.com website.
                This page informs you of our policies regarding the collection, use,
                and disclosure of personal data when you use our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Information Collection and Use</h2>
              <p className="text-neutral-400 leading-relaxed mb-4">
                We collect information that you voluntarily provide to us:
              </p>
              <ul className="list-disc list-inside text-neutral-400 space-y-2">
                <li>Name and email address when using our contact form</li>
                <li>Project information and inquiries</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Use of Data</h2>
              <p className="text-neutral-400 leading-relaxed">
                We use the collected data for the following purposes:
              </p>
              <ul className="list-disc list-inside text-neutral-400 space-y-2 mt-4">
                <li>To respond to your inquiries and provide services</li>
                <li>To improve our website and services</li>
                <li>To maintain a record of business correspondence</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Security of Data</h2>
              <p className="text-neutral-400 leading-relaxed">
                The security of your data is important to us, but no method of transmission
                over the Internet is 100% secure. We strive to use commercially acceptable
                means to protect your personal data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-neutral-400 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-neutral-400 mt-4">
                <a href="mailto:jeremy@neecratch.com" className="hover:text-white">
                  jeremy@neecratch.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
