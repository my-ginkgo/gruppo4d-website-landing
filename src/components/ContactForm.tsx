import emailjs from "@emailjs/browser";
import { CheckCircle, Send, XCircle } from "lucide-react";
import { FormEvent, useRef, useState } from "react";

interface FormStatus {
  type: "success" | "error" | null;
  message: string;
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      await emailjs.sendForm(
        "service_pmwfir9", // Replace with your EmailJS service ID
        "template_yc1i3fa", // Replace with your EmailJS template ID
        formRef.current,
        "bxCghTnoKHxNKXGTw" // Replace with your EmailJS public key
      );

      setFormStatus({
        type: "success",
        message: "Message sent successfully! We will get back to you soon.",
      });
      formRef.current.reset();
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 max-sm:text-center dark:text-white text-center">CONTATTACI</h2>

      {formStatus.type && (
        <div
          className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${
            formStatus.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}>
          {formStatus.type === "success" ? <CheckCircle size={20} /> : <XCircle size={20} />}
          {formStatus.message}
        </div>
      )}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        data-aos="fade-up"
        data-aos-delay="400"
        className="space-y-4 flex-grow">
        <div className="grid grid-cols-2 gap-4">
          <input
            name="user_name"
            type="text"
            placeholder="Nome"
            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary dark:focus:ring-primary-light focus:border-primary dark:focus:border-primary-light dark:text-white"
            required
          />
          <input
            name="user_email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary dark:focus:ring-primary-light focus:border-primary dark:focus:border-primary-light dark:text-white"
            required
          />
        </div>
        <input
          name="objecttxt"
          type="text"
          placeholder="Oggetto"
          className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary dark:focus:ring-primary-light focus:border-primary dark:focus:border-primary-light dark:text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Messaggio"
          className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary dark:focus:ring-primary-light focus:border-primary dark:focus:border-primary-light dark:text-white"
          required
          rows={4}></textarea>
        <button
          disabled={isSubmitting}
          type="submit"
          className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full w-full text-center
                   ${isSubmitting 
              ? ' cursor-not-allowed' 
              : 'cursor-pointer'}`}">
          {" "}
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
              Invio...
            </>
          ) : (
            <>
              <Send size={20} />
              Invia
            </>
          )}
        </button>
      </form>
    </div>
  );
}
