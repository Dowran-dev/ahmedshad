import { motion } from "framer-motion";

const Footer = ({ artistInfo }) => {
  const googleFormURL =
    "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
  const emailEntryID = "123456789"; // Replace with your actual entry ID

  const handleGoogleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    if (email) {
      // Redirect to Google Form with email pre-filled
      window.open(
        `${googleFormURL}?entry.${emailEntryID}=${encodeURIComponent(email)}`,
        "_blank"
      );

      alert("Email успешно отправлен в Google Forms!");
      event.target.reset(); // Clear input field
    }
  };

  return (
    <footer
      className="bg-black border-t border-white/10 py-24"
      id="contacts_section"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 px-8">
        {/* Contact Section */}
        <div>
          <h4 className="text-3xl font-bold text-white mb-8">Контакты</h4>
          <div className="text-white text-xl space-y-4">
            <p className="font-semibold">
              Представитель: {artistInfo.contact.representative}
            </p>
            <motion.a
              href={`tel:${artistInfo.contact.phone}`}
              whileHover={{ x: 10, color: "white" }}
              className="block text-xl hover:text-red-400 transition"
            >
              {artistInfo.contact.phone}
            </motion.a>
            <motion.a
              href={`mailto:${artistInfo.contact.email}`}
              whileHover={{ x: 10, color: "white" }}
              className="block text-xl hover:text-red-400 transition"
            >
              {artistInfo.contact.email}
            </motion.a>
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="text-3xl font-bold text-white mb-8">Соцсети</h4>
          <div className="space-y-4">
            {[
              {
                name: "Instagram",
                link: "https://www.instagram.com/ahmed.shad.official/",
              },
              { name: "VK", link: "https://vk.com/ahmedshadd" },
              {
                name: "TikTok",
                link: "https://www.tiktok.com/@ahmed.shad?lang=ru-RU",
              },
              { name: "YouTube", link: "https://www.youtube.com/ahmedshad" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  x: 10,
                  color: "white",
                  transition: { duration: 0.3 },
                }}
                className="block text-gray-400 hover:text-white text-xl transition"
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Subscription Section */}
        <div>
          <h4 className="text-3xl font-bold text-white mb-8">Подписка</h4>
          <form className="flex bg-white/5 rounded-full p-2">
            <input
              type="email"
              placeholder="Ваш email"
              className="w-full bg-transparent px-6 py-4 text-white placeholder-gray-500 focus:outline-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              className="bg-red-600 text-white px-8 py-4 rounded-full"
            >
              →
            </motion.button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
