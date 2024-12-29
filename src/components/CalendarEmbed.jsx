import Cal from "@calcom/embed-react";

export function CalendarEmbed({ calLink, config }) {

  return (
    <div className="relative w-full h-full min-h-[600px]">
      <Cal
        calLink={calLink}
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: "8px",
          minHeight: "600px"
        }}
        config={{
          theme: 'light',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          name: String(config?.name || ''),
          email: String(config?.email || ''),
          Company: String(config?.Company || ''),
          Website: String(config?.Website || ''),
          Business: String(config?.Business || '')
        }}
      />
    </div>
  );
}