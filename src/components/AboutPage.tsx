import { motion } from 'framer-motion';
import { ArrowLeft, Heart, PawPrint } from 'lucide-react';

export default function About() {
  return (
    <div className="from-primary/5 via-background to-secondary/5 min-h-screen bg-gradient-to-br p-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <a href="/">
            <button
              data-testid="button-back-about"
              className="hover:bg-secondary/20 mb-4 rounded-full p-2 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <div className="space-y-4 text-center">
            <PawPrint className="text-primary mx-auto h-12 w-12" />
            <h1 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
              About Kurimura Airi
            </h1>
          </div>

          <div className="bg-card rounded-[2rem] border-none shadow-lg">
            <div className="space-y-6 p-8 md:p-12">
              <div className="space-y-4">
                <h2 className="font-heading text-foreground text-2xl font-bold text-center">
                  The Heart of the After-School Sweets Club
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed text-center">
                  This fanweb is dedicated to Kurimura Airi, a spirited student at Trinity General School and a proud member of the After-School Sweets Club. Alongside her close friends Ibaragi Yoshimi, Yutori Natsu, and Kyouyama Kazusa, Airi balances her love for sweets with her role as a tactical combatant wielding a sub-machine gun. From her secret Sukeban ambitions and iconic spiked baseball bat to her unique fashion homages, this site celebrates every quirky and charming detail of Airi's personality. Explore the world of the After-School Sweets Club and discover the hidden depths of Trinity's most surprising student.
                </p>
              </div>

              <div className="border-border/40 border-t pt-4">
                <p className="text-muted-foreground text-center italic">
                  Celebrating the charm of the After-School Sweets Club! 🐱✨
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/">
              <button
                data-testid="button-back-home-about"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-2 font-bold"
              >
                Back to Home
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
