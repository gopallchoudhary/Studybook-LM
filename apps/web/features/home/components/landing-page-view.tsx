"use client";

import React from "react";
import { LandingHeader } from "./landing-header";
import { LandingHero } from "./landing-hero";
import { HowItWorksSection } from "./how-it-works-section";
import { WorkspaceMockSection } from "./workspace-mock-section";
import { BeforeAfterSection } from "./before-after-section";
import { UseCasesSection } from "./use-cases-section";
import { PricingSection } from "./pricing-section";
import { LandingFooter } from "./landing-footer";

export function LandingPageView() {
	return (
		<div className="min-h-screen selection:bg-brand/15 selection:text-brand">
			<LandingHeader />
			<main>
				<LandingHero />
				<HowItWorksSection />
				<WorkspaceMockSection />
				<BeforeAfterSection />
				<UseCasesSection />
				<PricingSection />
			</main>
			<LandingFooter />
		</div>
	);
}
