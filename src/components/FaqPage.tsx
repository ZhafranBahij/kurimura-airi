import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const faqs = [
    {
      id: 'faq-1',
      question: 'What are Airi\'s Sukeban ambitions?',
      answer:
        'During the events of Sweet Secrets and Gunfights, Airi stated she wanted to be a Sukeban member, carrying a baseball bat and face mask.',
    },
    {
      id: 'faq-2',
      question: 'What is the story behind the spiked bat?',
      answer:
        'The same bat appears in Serenade Promenade Afterword episodes, featuring spikes, nails, and a Chocomint decoration.',
    },
    {
      id: 'faq-3',
      question: 'Does Airi have any movie homages in her costumes?',
      answer:
        'Her School Festival costume homages Jason Voorhees, with a mask mashing up Jason and Ghostface from Scream.',
    },
    {
      id: 'faq-4',
      question: 'What is the secret about the Chocomint colors?',
      answer:
        'Interestingly, the color of the Chocomint, when inverted in negative colors, is actually blood.',
    },
    {
      id: 'faq-5',
      question: 'Has Airi shown any signs of emotional depth or depression?',
      answer:
        'She shows signs of depression, most noticeable in -ive aLIVE! and differences in her default vs Band Momotalk greetings.',
    },
    {
      id: 'faq-6',
      question: 'Are there any inconsistencies in Airi\'s 3D model?',
      answer:
        'Airi\'s bust size in her 3D model shares similar inconsistency issues as seen with Kazusa and her Band variant.',
    },
    {
      id: 'faq-7',
      question: 'Was there any change to her 3D chibi model?',
      answer:
        'The Chocomint ice cream in her 3D chibi model was significantly increased in size after her dangle animation was added.',
    },
  ];

  return (
    <div className="from-secondary/10 via-background to-primary/5 min-h-screen bg-gradient-to-br p-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex items-center gap-4"
        >
          <a href="/">
            <button className="hover:bg-secondary/20 rounded-full p-2 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </button>
          </a>
          <div>
            <h1 className="font-heading text-foreground text-4xl font-bold">
              FAQ
            </h1>
            <p className="text-muted-foreground">
              Answers to your questions about Kurimura Airi
            </p>
          </div>
        </motion.div>

        {/* FAQs */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              data-testid={`faq-item-${faq.id}`}
            >
              <div className="border-border/40 bg-card overflow-hidden rounded-xl border shadow-lg transition-shadow hover:shadow-xl">
                <button
                  onClick={() =>
                    setExpandedId(expandedId === faq.id ? null : faq.id)
                  }
                  className="bg-card hover:bg-card/80 w-full p-6 text-left transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-foreground text-lg font-bold">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-primary flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-border/40 overflow-hidden border-t"
                    >
                      <p className="text-muted-foreground p-6 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-primary/10 mt-12 rounded-2xl p-8 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We'd love to hear from you.
          </p>
          <a href="/contact">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2 font-bold shadow-lg transition-all hover:shadow-xl">
              Contact Us
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
