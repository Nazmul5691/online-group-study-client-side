/* eslint-disable react/no-unescaped-entities */


const Faq = () => {
    
    return (
        <div>
            <section className="bg-slate-100 rounded-lg py-10">
  <div className="container mx-auto">
    <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-5">
      {/* FAQ 1 */}
      <div className="border p-4 rounded shadow-lg">
        <h3 className="text-xl font-semibold mb-2">How do I join a study group?</h3>
        <p>
          To join a study group, you can sign up for an account on our platform. Once you're logged in, browse through the available study groups, select the one that interests you, and click the "Join" button.
        </p>
      </div>

      {/* FAQ 2 */}
      <div className="border p-4 rounded shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Can I create my own study group?</h3>
        <p>
          Absolutely! If you can't find a study group that matches your needs, you can create your own. Simply click on the "Create Study Group" button, fill in the details, and invite others to join.
        </p>
      </div>

      {/* FAQ 3 */}
      <div className="border p-4 rounded shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Are there any fees for using the platform?</h3>
        <p>
          Our platform is free to use. There are no hidden fees or subscriptions required. Enjoy all the features and resources without any cost.
        </p>
      </div>

      {/* FAQ 4 */}
      <div className="border p-4 rounded shadow-lg">
        <h3 className="text-xl font-semibold mb-2">How can I invite friends to a study group?</h3>
        <p>
          You can invite friends by sharing the study group's unique link or code. Simply go to the group's page, copy the link or code, and share it with your friends.
        </p>
      </div>

      {/* Add more FAQs as needed */}
    </div>
  </div>
</section>

        </div>
    );
};

export default Faq;