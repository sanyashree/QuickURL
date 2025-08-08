import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LandingPage() {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (!longUrl.trim()) return;
    navigate(`/auth?createNew=${encodeURIComponent(longUrl.trim())}`);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-6">
      {/* Center the whole section */}
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="my-6 sm:my-10 text-3xl sm:text-6xl lg:text-7xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-rose-500 to-fuchsia-600">
          The only URL Shortener <br />
          you&rsquo;ll ever need! <span aria-hidden></span>
        </h2>

        {/* Input + Button row (always centered) */}
        <form
          onSubmit={handleShorten}
          className="w-full max-w-2xl grid grid-cols-1 sm:[grid-template-columns:1fr_auto] gap-3"
        >
          <Input
            type="url"
            placeholder="Enter your loooong URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            className="h-12 sm:h-14 px-4"
            required
          />

          {/* Force a visible button style regardless of theme */}
          <Button
            type="submit"
            className="h-12 sm:h-14 px-6 sm:px-8 bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Shorten!
          </Button>
        </form>

        {/* FAQ (centered block) */}
        <div className="w-full max-w-3xl mt-10">
          <Accordion type="multiple" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How does the QuickURL shortener work?</AccordionTrigger>
              <AccordionContent>
                Enter a long URL and we generate a short link that redirects to the
                original destination when visited.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Do I need an account to use the app?</AccordionTrigger>
              <AccordionContent>
                Yes. An account lets you manage links, see analytics, and customize
                your short URLs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What analytics are available?</AccordionTrigger>
              <AccordionContent>
                Click counts, geolocation breakdown, and device type (mobile/desktop)
                for each short link.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}