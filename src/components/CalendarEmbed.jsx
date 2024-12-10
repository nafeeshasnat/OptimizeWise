import Cal from "@calcom/embed-react";

export function CalendarEmbed({ calLink }) {
  return (
    <div className="relative w-full h-full">
      <Cal
        calLink={calLink}
        style={{
          width: "100%",
          height: "auto",
          overflow: "hidden",
          borderRadius: "8px",
          position: "unset",
          top: 0,
          left: 0
        }}
        config={{
          theme: 'light',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false
        }}
      />
    </div>
  );
}