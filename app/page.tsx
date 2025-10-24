import { HeroSection } from '@/components/HeroSection'
import { WhyCourseSection } from '@/components/WhyCourseSection'
import { CurriculumSection } from '@/components/CurriculumSection'
import { InstructorSection } from '@/components/InstructorSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { PricingSection } from '@/components/PricingSection'
import { FAQSection } from '@/components/FAQSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyCourseSection />
      <CurriculumSection />
      <InstructorSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
    </>
  )
}
