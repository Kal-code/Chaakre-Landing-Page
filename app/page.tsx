import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import CareerShowcase from "@/components/CareerShowcase";
import CandidateQuestions from "@/components/CandidateQuestions";
import Testimonial from "@/components/Testimonial";
import UseCaseJourney from "@/components/UseCaseJourney";
import Research from "@/components/Research";
import Interviews from "@/components/Interviews";
import Story from "@/components/Story";
import BehindThePage from "@/components/BehindThePage";
import FitCheck from "@/components/FitCheck";
import Offer from "@/components/Offer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Letter />
      <CareerShowcase>
        <CandidateQuestions />
        <Testimonial />
      </CareerShowcase>
      <UseCaseJourney />
      <Research />
      <Interviews />
      <Story />
      <BehindThePage />
      <FitCheck />
      <Offer />
      <Footer />
    </main>
  );
}
