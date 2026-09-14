import { AddressLookup } from "@/components/AddressLookup";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ScriptAccordion, ScriptAccordionGroup } from "@/components/ScriptAccordion";
import { Section } from "@/components/Section";
import sectionStyles from "@/components/Section.module.css";
import { ShareSection } from "@/components/ShareSection";
import { SoftrEmbed } from "@/components/SoftrEmbed";
import {
  leadershipScripts,
  representativesScript,
  senatorsScript,
} from "@/data/doaCampaign";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <main className={styles.main} id="main-content">
        <Section
          id="lookup"
          step={1}
          title="Find your members of Congress"
          intro="Enter your address and we'll show you who represents you and how to contact them."
        >
          <AddressLookup />
        </Section>

        <Section
          id="senators"
          step={2}
          title="California senators"
          intro="Contact California's two U.S. senators. Read the suggested script, copy it, then use the contact cards below."
        >
          <ScriptAccordion
            title="Read and copy the suggested script for California senators"
            script={senatorsScript}
            copyLabel="Copy the script"
          />
          <SoftrEmbed embedKey="caSenators" />
        </Section>

        <Section
          id="representatives"
          step={3}
          title="California House delegation"
          intro="Find your representative in the list below, then call them or copy the script and paste it into their official contact form."
        >
          <ScriptAccordion
            title="Read and copy the suggested script for California representatives"
            script={representativesScript}
            copyLabel="Copy the script"
          />
          <SoftrEmbed embedKey="caDelegation" />
        </Section>

        <Section
          id="leadership"
          step={4}
          title="Congressional leadership"
          intro="Several Congressional leaders have disproportionate influence over federal disaster funding. Each script below matches a leader in the contact list."
        >
          <ScriptAccordionGroup
            scripts={leadershipScripts.map((item) => ({
              title: item.title,
              script: item.script,
              copyLabel: item.copyLabel,
            }))}
          />
          <SoftrEmbed embedKey="congressLeadership" />
        </Section>

        <Section
          id="share"
          step={5}
          title={
            <>
              Your story can help move Congress.{" "}
              <span className={sectionStyles.titleAccent}>#fundrecoverynow</span>
            </>
          }
          intro="Share this campaign on social media with the campaign graphics below. Help us show Congress how many people are standing with survivors."
        >
          <ShareSection />
        </Section>
      </main>
      <Footer />
    </>
  );
}
