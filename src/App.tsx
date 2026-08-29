import React, { useState } from 'react';
import { KidsNavbar } from './components/kids/KidsNavbar';
import { KidsHero } from './components/kids/KidsHero';
import { KidsGraphicComparison } from './components/kids/KidsGraphicComparison';
import { KidsAgeJourney } from './components/kids/KidsAgeJourney';
import { KidsServices } from './components/kids/KidsServices';
import { KidsSensoryAmenities } from './components/kids/KidsSensoryAmenities';
import { KidsDoctorTeam } from './components/kids/KidsDoctorTeam';
import { KidsParentGuidance } from './components/kids/KidsParentGuidance';
import { KidsReviews } from './components/kids/KidsReviews';
import { KidsFAQ } from './components/kids/KidsFAQ';
import { KidsLocationFooter } from './components/kids/KidsLocationFooter';
import { KidsBookingModal } from './components/kids/KidsBookingModal';
import { KidsFloatingActions } from './components/kids/KidsFloatingActions';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingInitialReason, setBookingInitialReason] = useState<string>('Comprehensive Diagnostic Protocol & Airway Audit');

  const handleOpenBooking = (reason?: string) => {
    if (reason) setBookingInitialReason(reason);
    setIsBookingOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-[#FBFBF9] text-slate-800 font-sans selection:bg-teal-100 selection:text-teal-900">
      
      {/* High-End Architectural Navigation */}
      <KidsNavbar
        onOpenBooking={() => handleOpenBooking('Comprehensive Diagnostic Protocol & Airway Audit')}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Experience Flow */}
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        {/* Luxury Hero Banner */}
        <KidsHero
          onOpenBooking={handleOpenBooking}
          onNavigateSection={handleNavigateSection}
        />

        {/* Graphic Comparison Matrix (Old vs Little Orbit Atelier) */}
        <KidsGraphicComparison
          onOpenBooking={() => handleOpenBooking('Comprehensive First Pediatric Visit')}
        />

        {/* 4-Stage Milestone Developmental Pathways */}
        <KidsAgeJourney
          onOpenBooking={handleOpenBooking}
        />

        {/* Biomimetic & Laser Pediatric Disciplines */}
        <KidsServices
          onOpenBooking={handleOpenBooking}
        />

        {/* Sensory Sanctuary, Acoustic Suites & Therapy Canine */}
        <KidsSensoryAmenities
          onOpenBooking={handleOpenBooking}
        />

        {/* Board-Certified Faculty & Hospital Fellowships */}
        <KidsDoctorTeam
          onOpenBooking={handleOpenBooking}
        />

        {/* Parent Reassurance, Transparent Care Plans & Insurance OPD */}
        <KidsParentGuidance
          onOpenBooking={handleOpenBooking}
        />

        {/* Physician & Architect Parent Testimonials */}
        <KidsReviews />

        {/* Clinical Advisory & FAQ */}
        <KidsFAQ
          onOpenBooking={handleOpenBooking}
        />
      </main>

      {/* Location Atelier, Valet & Hours */}
      <KidsLocationFooter
        onOpenBooking={() => handleOpenBooking('Comprehensive Diagnostic Protocol & Airway Audit')}
        onNavigateSection={handleNavigateSection}
      />

      {/* Bespoke Private Suite Reservation & Sensory Intake Modal */}
      <KidsBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialReason={bookingInitialReason}
      />

      {/* Floating Bottom-Right WhatsApp & Helpline Concierge */}
      <KidsFloatingActions
        onOpenBooking={() => handleOpenBooking('Comprehensive Diagnostic Protocol & Airway Audit')}
      />
    </div>
  );
}
