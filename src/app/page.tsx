import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <Card className="mb-6 border-neutral-200 shadow-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-4xl font-bold text-neutral-900 mb-2">
              Andrey Bogoslovskiy
            </CardTitle>
            <CardDescription className="text-xl text-neutral-700 font-medium">
              Senior Business Analyst | Product Manager
            </CardDescription>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-neutral-600">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Aarau, Switzerland</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <a href="tel:+41795216717" className="hover:text-neutral-900 transition-colors">
                  +41 79 521 67 17
                </a>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <a href="mailto:andybogoslavskiy@gmail.com" className="hover:text-neutral-900 transition-colors">
                  andybogoslavskiy@gmail.com
                </a>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Professional Summary */}
        <Card className="mb-6 border-neutral-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-neutral-900">Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-700 leading-relaxed">
              Result-oriented IT professional with over 10 years of experience in Product Management and Business Analysis.
              Proven track record of leading cross-functional teams (developers, designers, marketers) and managing digital
              products from "0 to 1". Skilled in crisis management for startups, market strategy development, and requirements
              engineering for high-load systems.
            </p>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <Card className="mb-6 border-neutral-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-neutral-900">Work Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Petrichor */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">Product Manager / Lead</h3>
                  <p className="text-neutral-700">Petrichor (SPA & Wellness Startup)</p>
                </div>
                <Badge variant="secondary" className="mt-2 sm:mt-0 w-fit">
                  September 2024 — June 2025
                </Badge>
              </div>
              <p className="text-neutral-600 text-sm mb-3">Led the turnaround and launch of a stalled wellness startup.</p>
              <ul className="list-disc list-inside space-y-1 text-neutral-700 text-sm">
                <li><strong>Crisis Management:</strong> Took over the project at a stagnation stage, conducted a full audit, and revitalized the product vision.</li>
                <li><strong>Go-to-Market Strategy:</strong> Developed the market entry concept and strategic roadmap for the product launch.</li>
                <li><strong>Team Leadership:</strong> Managed the design and development teams, establishing effective workflows to ensure delivery.</li>
                <li><strong>Achievement:</strong> Successfully moved the project from zero traction to a fully launched product ("0 to 1").</li>
              </ul>
            </div>

            <Separator className="bg-neutral-200" />

            {/* UltraNET */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">Product Manager</h3>
                  <p className="text-neutral-700">UltraNET (Decentralized Content Protocol)</p>
                </div>
                <Badge variant="secondary" className="mt-2 sm:mt-0 w-fit">
                  April 2024 — August 2024
                </Badge>
              </div>
              <p className="text-neutral-600 text-sm mb-3">Strategy development for a Web3/Blockchain content delivery protocol.</p>
              <ul className="list-disc list-inside space-y-1 text-neutral-700 text-sm">
                <li><strong>Market Strategy:</strong> Conducted in-depth analysis of the decentralized market to formulate a comprehensive Go-to-Market strategy.</li>
                <li><strong>Product Concept:</strong> Designed concepts for satellite products to drive protocol adoption and user demand.</li>
                <li><strong>Strategic Planning:</strong> Acted as the key driver for the product's market positioning and functional roadmap.</li>
              </ul>
            </div>

            <Separator className="bg-neutral-200" />

            {/* ProFin Center */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">Business Analyst / Project Manager</h3>
                  <p className="text-neutral-700">ProFin Center</p>
                </div>
                <Badge variant="secondary" className="mt-2 sm:mt-0 w-fit">
                  September 2023 — April 2024
                </Badge>
              </div>
              <p className="text-neutral-600 text-sm mb-3">High-load CRM system for CFD Brokers (FinTech).</p>
              <ul className="list-disc list-inside space-y-1 text-neutral-700 text-sm">
                <li><strong>Full-Cycle Management:</strong> Executed a full spectrum of BA and PM responsibilities in a high-pressure environment.</li>
                <li><strong>Requirements Engineering:</strong> Analyzed complex brokerage business processes and translated them into technical specifications for the development team.</li>
              </ul>
            </div>

            <Separator className="bg-neutral-200" />

            {/* Hilman Ventures */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">Product Owner</h3>
                  <p className="text-neutral-700">Hilman Ventures Invest Board</p>
                </div>
                <Badge variant="secondary" className="mt-2 sm:mt-0 w-fit">
                  December 2022 — July 2023
                </Badge>
              </div>
              <ul className="list-disc list-inside space-y-1 text-neutral-700 text-sm">
                <li><strong>Vision Execution:</strong> Collaborated directly with the project owner to realize their business vision and translate it into actionable tasks.</li>
                <li><strong>Backlog Management:</strong> Managed and prioritized the product backlog to maximize value delivery.</li>
              </ul>
            </div>

            <Separator className="bg-neutral-200" />

            {/* AUTODOC EU */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">Senior Business Analyst</h3>
                  <p className="text-neutral-700">AUTODOC EU (Kyiv)</p>
                </div>
                <Badge variant="secondary" className="mt-2 sm:mt-0 w-fit">
                  June 2022 — November 2022
                </Badge>
              </div>
              <ul className="list-disc list-inside space-y-1 text-neutral-700 text-sm">
                <li>Supported the development team by clarifying and detailing requirements for Epics provided by the Product Owner.</li>
                <li>Maintained the stability of development processes and ensured seamless task execution within the Agile environment.</li>
              </ul>
            </div>

            <Separator className="bg-neutral-200" />

            {/* AtiLog Software */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">Business Analyst</h3>
                  <p className="text-neutral-700">AtiLog Software (Kharkiv)</p>
                </div>
                <Badge variant="secondary" className="mt-2 sm:mt-0 w-fit">
                  December 2020 — June 2022
                </Badge>
              </div>
              <ul className="list-disc list-inside space-y-1 text-neutral-700 text-sm">
                <li><strong>Requirements Analysis:</strong> Elicited customer needs through prototyping, brainstorming, and competitor analysis.</li>
                <li><strong>Documentation:</strong> Formalized requirements into Business, Functional, and Non-functional specifications (SRS).</li>
                <li><strong>Process Improvement:</strong> Identified problem areas in business processes and proposed technical solutions for optimization.</li>
                <li><strong>Change Management:</strong> Managed change requests and assessed their impact on the existing product scope.</li>
              </ul>
            </div>

            <Separator className="bg-neutral-200" />

            {/* AN.WORKS */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">Product Owner</h3>
                  <p className="text-neutral-700">AN.WORKS (Kharkiv)</p>
                </div>
                <Badge variant="secondary" className="mt-2 sm:mt-0 w-fit">
                  August 2019 — December 2020
                </Badge>
              </div>
              <ul className="list-disc list-inside space-y-1 text-neutral-700 text-sm">
                <li><strong>Product Development:</strong> Led the creation and promotion of new product ideas from concept to finished service.</li>
                <li><strong>Analytics:</strong> Conducted competitor analysis, market forecasting, and product lifecycle planning.</li>
                <li><strong>KPI Management:</strong> Developed KPI plans and controlled their precise execution.</li>
              </ul>
            </div>

            <Separator className="bg-neutral-200" />

            {/* ELKO Media */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">Product Manager / Business Analyst</h3>
                  <p className="text-neutral-700">ELKO Media (Kharkiv)</p>
                </div>
                <Badge variant="secondary" className="mt-2 sm:mt-0 w-fit">
                  August 2018 — December 2019
                </Badge>
              </div>
              <ul className="list-disc list-inside space-y-1 text-neutral-700 text-sm">
                <li>Formed and managed a remote team to solve web development and marketing challenges for a Toronto-based agency.</li>
                <li>Oversaw the creation of marketing assets to launch sales departments in Canada.</li>
              </ul>
            </div>

            <Separator className="bg-neutral-200" />

            {/* Digital Flat */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">Project Manager</h3>
                  <p className="text-neutral-700">Digital Flat (Kharkiv)</p>
                </div>
                <Badge variant="secondary" className="mt-2 sm:mt-0 w-fit">
                  June 2014 — August 2018
                </Badge>
              </div>
              <ul className="list-disc list-inside space-y-1 text-neutral-700 text-sm">
                <li>Managed full-cycle web projects from idea to monetization and UX design.</li>
                <li>Oversaw development of ERP systems for local communities and automation projects for government agencies (e.g., Vodokanal).</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-6 border-neutral-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-neutral-900">Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-neutral-300">Business Analysis</Badge>
                <Badge variant="outline" className="border-neutral-300">Product Management</Badge>
                <Badge variant="outline" className="border-neutral-300">Project Management</Badge>
                <Badge variant="outline" className="border-neutral-300">Agile & Scrum</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-neutral-300">Leadership</Badge>
                <Badge variant="outline" className="border-neutral-300">Problem Solving</Badge>
                <Badge variant="outline" className="border-neutral-300">Creativity</Badge>
                <Badge variant="outline" className="border-neutral-300">Teamwork</Badge>
                <Badge variant="outline" className="border-neutral-300">Time Management</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-neutral-300">English (Professional)</Badge>
                <Badge variant="outline" className="border-neutral-300">Ukrainian (Native)</Badge>
                <Badge variant="outline" className="border-neutral-300">Russian (Native)</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-6 border-neutral-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-neutral-900">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">Programmer Engineer</h3>
                <p className="text-neutral-700">Kharkiv Radio Engineering Technical School</p>
              </div>
              <Badge variant="secondary" className="mt-2 sm:mt-0 w-fit">
                September 2006 — June 2010
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-neutral-500 mt-8">
          <p>© {new Date().getFullYear()} Andrey Bogoslovskiy. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
