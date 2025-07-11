// app/terms/page.tsx (App Router) or pages/terms.tsx (Pages Router)
import React from "react";

export default function TermsPage() {
  return (
    <main className="max-w-screen-lg mx-auto px-6 py-12 pt-28 text-slate-800">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to my portfolio website. By accessing or using this site,
            you agree to be bound by these Terms and Conditions. If you do not
            agree, please do not use the website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Use of Content</h2>
          <p>
            All content on this website, including text, images, and projects,
            is the intellectual property of the site owner unless otherwise
            stated. You may not copy, reproduce, or use any content without
            prior written permission.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Third-Party Links</h2>
          <p>
            This website may include links to third-party websites or services.
            I am not responsible for the content or practices of those websites
            and encourage you to review their terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Disclaimer</h2>
          <p>
            This site is provided for informational purposes only. I do not
            guarantee that all content is accurate, complete, or up-to-date. Any
            reliance on the information provided is at your own risk.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            5. Limitation of Liability
          </h2>
          <p>
            Under no circumstances will I be liable for any direct, indirect, or
            incidental damages resulting from the use or inability to use the
            site or its content.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
          <p>
            I reserve the right to modify these Terms at any time. Updated
            versions will be posted here with the effective date. Continued use
            of the site implies acceptance of the new terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
          <p>
            If you have any questions regarding these Terms & Conditions, please
            contact me at ayomide@gmail.com.
          </p>
        </div>
      </section>
    </main>
  );
}
